#!/usr/bin/env node

const { program } = require('commander');
const packageJson = require('../package.json');

// Register commands
require('../lib/commands/init')(program);
require('../lib/commands/create-frontend')(program);
require('../lib/commands/create-backend')(program);
require('../lib/commands/create-fullstack')(program);
require('../lib/commands/doctor')(program);
require('../lib/commands/banner')(program);

program
  .name('d-cli')
  .description('Dnyftech Command Line Interface')
  .version(packageJson.version);

// If no command is provided, show help
if (process.argv.length === 2) {
  program.help();
}

program.parse(process.argv);
