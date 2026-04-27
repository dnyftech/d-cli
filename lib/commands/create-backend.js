const path = require('path');
const paths = require('../utils/paths');
const { copyTemplate } = require('../utils/fs');
const logger = require('../utils/logger');

module.exports = (program) => {
  program
    .command('create backend <name>')
    .description('Generate an Express backend scaffold')
    .action(async (name) => {
      const targetDir = path.join(paths.getBackendDir(), name);
      const templateDir = path.resolve(__dirname, '../../templates/backend-express');
      logger.info(`Creating backend project: ${name}`);
      await copyTemplate(templateDir, targetDir);
      logger.success(`Backend scaffolded at ${targetDir}`);
    });
};
