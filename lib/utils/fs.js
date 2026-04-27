const fs = require('fs-extra');
const path = require('path');
const logger = require('./logger');

/**
 * Recursively copies a template directory to a target folder.
 * Ensures the target folder exists (creates all missing parents).
 * @param {string} templateDir - absolute path to template folder
 * @param {string} targetDir  - absolute destination path
 */
async function copyTemplate(templateDir, targetDir) {
  try {
    await fs.ensureDir(targetDir);
    await fs.copy(templateDir, targetDir, { overwrite: false }); // never overwrite
    logger.success(`Created ${targetDir}`);
    return true;
  } catch (err) {
    logger.error(`Failed to copy template: ${err.message}`);
    throw err;
  }
}

/**
 * Creates a directory (including parents) if it doesn't exist.
 */
async function ensureDirectory(dir) {
  await fs.ensureDir(dir);
  logger.success(`Directory ready: ${dir}`);
}

module.exports = {
  copyTemplate,
  ensureDirectory
};
