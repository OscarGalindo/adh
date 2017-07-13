#!/usr/bin/env node
'use strict';
const program = require('commander');
const chalk = require("chalk");
const boxen = require("boxen");
const action = require('./action');
const pkg = require('./package.json');
const simpleCommands = require('./commands.json');
const complexCommands = require('./commands/index.js')(program, action.stdExec, chalk);
const R = require('ramda');

program.version(pkg.version);

simpleCommands.forEach(command => {
  program
    .command(command.cli)
    .alias(command.alias)
    .description(chalk.yellow(command.description))
    .action(() => {
      action.stdExec({
        cmd: command.cmd,
        color: typeof command.color === 'undefined' ? true : command.color
      }).then(x => {
        console.log(boxen(x, {padding: 1, borderColor: "yellow"}));
      })
    })
});

program.on('*', function () {
  console.log('Unknown Command: ' + program.args.join(' '));
  program.help();
});

program.on('help', function () {
  program.help();
});

program.parse(process.argv);