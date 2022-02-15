const path = require("path");
const {
  override,
  addWebpackAlias,
  removeModuleScopePlugin,
} = require("customize-cra");
const { paths } = require('react-app-rewired');

function getLocalPkgAlias(moduleName) {
  return path.join(__dirname, `node_modules/${moduleName}`);
}

module.exports = {
  webpack: override(
    addWebpackAlias({
      '@': paths.appSrc,
      react$: getLocalPkgAlias("react"),
      "react-dom$": getLocalPkgAlias("react-dom"),
      // 'react-router$': getLocalPkgAlias('react-router'),
      // 'react-router-dom$': getLocalPkgAlias('react-router-dom'),
    }),
    removeModuleScopePlugin()
  ),
};
