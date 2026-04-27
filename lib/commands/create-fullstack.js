const path = require('path');
const paths = require('../utils/paths');
const { copyTemplate } = require('../utils/fs');
const logger = require('../utils/logger');

module.exports = (program) => {
  program
    .command('create fullstack <name>')
    .description('Generate combined frontend + backend')
    .action(async (name) => {
      const targetDir = path.join(paths.getFullstackDir(), name);
      const templateDir = path.resolve(__dirname, '../../templates/fullstack');
      logger.info(`Creating fullstack project: ${name}`);
      await copyTemplate(templateDir, targetDir);
      logger.success(`Fullstack scaffolded at ${targetDir}`);
    });
};
