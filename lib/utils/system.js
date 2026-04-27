const { execSync } = require('child_process');
const logger = require('./logger');

/**
 * Runs a safe read-only system command and returns trimmed stdout.
 * Only used for environment checks (e.g., `node -v`, `npm -v`).
 * This is the ONLY place where execSync is allowed, and it is strictly read-only.
 */
function runSafe(cmd) {
  try {
    return execSync(cmd, { encoding: 'utf8' }).trim();
  } catch {
    return null;
  }
}

module.exports = {
  runSafe,
  nodeVersion: () => runSafe('node -v'),
  npmVersion: () => runSafe('npm -v')
};
