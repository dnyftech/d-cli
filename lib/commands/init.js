const paths = require('../utils/paths');
const { ensureDirectory } = require('../utils/fs');
const logger = require('../utils/logger');

module.exports = (program) => {
  program
    .command('init')
    .description('Create base workspace structure')
    .action(async () => {
      logger.info('Initialising Dnyftech workspace...');
      const dirs = [
        paths.getFrontendDir(),
        paths.getBackendDir(),
        paths.getToolsDir(),
        paths.getScriptsDir(),
        paths.getLogsDir()
      ];
      for (const dir of dirs) {
        await ensureDirectory(dir);
      }
      logger.success('Workspace structure ready.');
    });
};
