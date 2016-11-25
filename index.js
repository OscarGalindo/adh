#!/usr/bin/env node
'use strict';
const program = require('commander');
const exec = require('child_process').exec;
const chalk = require("chalk");
const pkg = require('./package.json');
const commands = require('./commands.json');

program
    .version(pkg.version);

commands.forEach(command => {
    program
        .command(command.cli)
        .description(chalk.blue(command.description) + chalk.black(' -> ') + chalk.gray(command.cmd))
        .action(evalAction.bind(null, {cmd: command.cmd, color: typeof command.color === 'undefined' ? true : command.color}))
});

program.parse(process.argv);

if (program.args.length === 0) program.help();

function evalAction(action) {
    let execCallback = (error, stdout, stderr) => {
        if (error) console.log(chalk.red("exec error: " + error));
        if (stdout) console.log(action.color ? chalk.green(stdout) : stdout);
        if (stderr) console.log(chalk.red(stderr));
    };

    exec(action.cmd, execCallback);
}