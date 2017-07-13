const chalk = require("chalk");
const execa = require('execa');

module.exports.stdExec = (action) => {
  return execa.shell(action.cmd)
    .then(res => res.stdout)
    .catch(err => console.log(chalk.red("stdExec error: " + err)));
};