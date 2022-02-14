const path = require('path');
const {
    override,
    addWebpackAlias,
  } = require('customize-cra');

function getLocalPkgAlias(moduleName) {
return path.join(__dirname, `node_modules/${moduleName}`);
}
  


module.exports = {
    webpack: override(addWebpackAlias({
        react$: getLocalPkgAlias('react'),
        'react-dom$': getLocalPkgAlias('react-dom'),
      }))
    
}