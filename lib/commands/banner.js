const packageJson = require('../../package.json');
const os = require('os');
const logger = require('../utils/logger');

module.exports = (program) => {
  program
    .command('banner')
    .description('Print Dnyftech CLI identity banner')
    .action(() => {
      const banner = `
────────────────────────────────────────
DNYFTECH COMMAND INTERFACE
(d-cli v${packageJson.version})
────────────────────────────────────────
User: ceeza
System: ${os.type()} Dev Environment
Mode: Developer-Controlled CLI
Status: READY
────────────────────────────────────────
`;
      logger.banner(banner);
    });
};
