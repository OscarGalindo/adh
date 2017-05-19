const chalk = require("chalk");
const execa = require('execa');

module.exports.stdExec = (action) => {
  execa.shell(action.cmd)
    .then(res => console.log(action.color ? chalk.green(res.stdout) : res.stdout))
    .catch(err => console.log(chalk.red("stdExec error: " + err)));
};