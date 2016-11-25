module.exports = function (program, evalAction, chalk) {
    program
        .command('nginx')
        .description(chalk.yellow("Run nginx with a volume in the current directory "))
        .option('-f, --force', 'Force remove nginx container with same name')
        .option('-p, --port <port>', 'Host port', parseInt)
        .option('-n, --name <name>', 'Container name', 'adh-nginx')
        .action(function (options) {
            const port = options.port ? options.port : 8888;
            const name = options.name;

            if (typeof port !== 'number' || isNaN(port)) {
                console.log(port + ' port is not a number!');
                process.exit(1);
            }

            var commands = [
                'docker run --name ' + name + ' -p ' + port + ':80 -v `pwd`:/usr/share/nginx/html:ro -d nginx'
            ];

            if (options.force) {
                commands.unshift('docker rm -f ' + name + ' || true')
            }

            evalAction({cmd: commands.join('&&')});
        }).on('--help', function() {
        console.log('  Examples:');
        console.log();
        console.log('    $ adh nginx -p 8080 -h myNginx -f');
        console.log('    $ adh nginx -h myOtherNginx');
        console.log();
    });;
};