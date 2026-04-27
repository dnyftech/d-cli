const chalk = require('chalk');

module.exports = {
  info: (msg) => console.log(chalk.blue(`[d-cli] ${msg}`)),
  success: (msg) => console.log(chalk.green(`[d-cli] ✓ ${msg}`)),
  warn: (msg) => console.log(chalk.yellow(`[d-cli] ⚠ ${msg}`)),
  error: (msg) => console.error(chalk.red(`[d-cli] ✗ ${msg}`)),
  banner: (msg) => console.log(chalk.cyan(msg))
};
