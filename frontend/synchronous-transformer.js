const babel = require('@babel/core');
const RNFS = require('react-native-fs')
const path = require('path');

module.exports.transform = function ({ src, filename, options }) {
  if (path.basename(filename) === 'metro.config.js') {
    return src;
  }
  const { code } = babel.transformSync(src, {
    filename,
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      ['module:babel-plugin-dotenv', { replace: true }],
    ],
    sourceMaps: options.sourceMap,
  });
  return { code, map: null };
};
