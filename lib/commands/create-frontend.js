const path = require('path');
const paths = require('../utils/paths');
const { copyTemplate } = require('../utils/fs');
const logger = require('../utils/logger');

module.exports = (program) => {
  program
    .command('create frontend <name>')
    .description('Generate a Vite + React frontend project')
    .action(async (name) => {
      const targetDir = path.join(paths.getFrontendDir(), name);
      const templateDir = path.resolve(__dirname, '../../templates/frontend-react');
      logger.info(`Creating frontend project: ${name}`);
      await copyTemplate(templateDir, targetDir);
      logger.success(`Frontend scaffolded at ${targetDir}`);
    });
};
