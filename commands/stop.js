const inquirer = require('inquirer');
const R = require('ramda');
const listContainers = require("../lib/docker.js").listContainers;
const stopContainer = require("../lib/docker.js").stopContainer;
const container = require("../lib/docker.js").container;
const boxen = require('boxen');
const Listr = require('listr');

module.exports = function (program, evalAction, chalk) {
  program
    .command('stop')
    .description(chalk.yellow("Stop containers"))
    .action(() => {
      listContainers()
        .map(R.map(y => ({name: y.Names[0], value: y})))
        .subscribe(containers => {
          if (R.isEmpty(containers)) {
            console.log(boxen('No containers running', {padding: 1, borderColor: "yellow"}));
            return;
          }

          const tasks = [
            {
              type: 'checkbox',
              name: 'container',
              message: 'Select container/s to stop',
              choices: containers
            },
          ];
          inquirer.prompt(tasks)
            .then(containers => {
              const cntrs = containers.container
                .map(ctr => ({
                    title: 'Stopping ' + ctr.Names[0],
                    task: () => stopContainer(container(ctr.Id))
                  })
                );

              new Listr(cntrs, {concurrent: true}).run();
            });
        });
    });
};