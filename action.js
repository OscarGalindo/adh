const chalk = require("chalk");
const exec = require('child_process').exec;

module.exports.stdExec = (action) => {
    let execCallback = (error, stdout, stderr) => {
        if (error) console.log(chalk.red("stdExec error: " + error));
        if (stdout) console.log(action.color ? chalk.green(stdout) : stdout);
        if (stderr) console.log(chalk.red(stderr));
    };

    exec(action.cmd, execCallback);
};