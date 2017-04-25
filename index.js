#!/usr/bin/env node
'use strict';
const program = require('commander');
const chalk = require("chalk");
const action = require('./action');
const pkg = require('./package.json');
const simpleCommands = require('./commands.json');
const complexCommands = require('./commands/index.js')(program, action.stdExec, chalk);
var R = require('ramda');

program.version(pkg.version);

simpleCommands.forEach(command => {
    R.uniq(R.flatten([command.cli])).forEach(cli => {
        program
            .command(cli)
            .description(chalk.yellow(command.description) + chalk.white(' -> ') + chalk.cyan(command.cmd))
            .action(action.stdExec.bind(null, {
                cmd: command.cmd,
                color: typeof command.color === 'undefined' ? true : command.color
            }))
    })
})

program.on('*', function () {
    console.log('Unknown Command: ' + program.args.join(' '));
    program.help();
});

program.parse(process.argv);