const os = require('os');
const system = require('../utils/system');
const paths = require('../utils/paths');
const fs = require('fs');
const logger = require('../utils/logger');

module.exports = (program) => {
  program
    .command('doctor')
    .description('Check system environment and workspace')
    .action(() => {
      logger.info('Running environment diagnostics...\n');

      // Node.js version
      const nodeVer = system.nodeVersion();
      logger.info(`Node.js version : ${nodeVer || 'NOT FOUND'}`);

      // npm version
      const npmVer = system.npmVersion();
      logger.info(`npm version     : ${npmVer || 'NOT FOUND'}`);

      // Workspace existence
      const wsRoot = paths.WORKSPACE_ROOT;
      const wsExists = fs.existsSync(wsRoot);
      logger.info(`Workspace root  : ${wsRoot} ${wsExists ? '✓ exists' : '✗ missing'}`);

      // Check known subfolders
      const expected = ['frontend', 'backend', 'tools', 'scripts', 'logs', 'fullstack'];
      const missing = expected.filter(f => !fs.existsSync(paths.resolveWorkspace(f)));
      if (missing.length > 0) {
        logger.warn(`Missing folders : ${missing.join(', ')} (run "d-cli init")`);
      } else {
        logger.success('All standard workspace folders present.');
      }

      // OS info
      logger.info(`OS              : ${os.type()} ${os.release()}`);
    });
};
