const os = require('os');
const path = require('path');

// Standard workspace root for the developer
const WORKSPACE_ROOT = path.join(os.homedir(), 'workspace');

module.exports = {
  WORKSPACE_ROOT,
  getFrontendDir: () => path.join(WORKSPACE_ROOT, 'frontend'  ),
  getBackendDir:  () => path.join(WORKSPACE_ROOT, 'backend'   ),
  getToolsDir:    () => path.join(WORKSPACE_ROOT, 'tools'     ),
  getScriptsDir:  () => path.join(WORKSPACE_ROOT, 'scripts'   ),
  getLogsDir:     () => path.join(WORKSPACE_ROOT, 'logs'      ),
  getFullstackDir:() => path.join(WORKSPACE_ROOT, 'fullstack' ),
  resolveWorkspace: (relative) => path.join(WORKSPACE_ROOT, relative)
};
