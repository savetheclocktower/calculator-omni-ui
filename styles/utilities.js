
function atomConfig (keyPath) {
  let value = atom.config.get(keyPath.value);
  return value;
}

module.exports = {
  install: function(_less, _pluginManager, functions) {
    functions.add('atomConfig', atomConfig);
  }
};
