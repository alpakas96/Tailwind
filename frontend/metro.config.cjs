module.exports = {
    transformer: {
      babelTransformerPath: require.resolve('metro-react-native-babel-transformer'),
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: false,
        },
        babelrc: true,
        babelrcRoots: [
          // Keep the root as a root
          '.',
          // Also consider monorepo packages "root" and load their .babelrc files.
          './packages/*',
        ],
        presets: ['babel-preset-expo'],
        plugins: ['module:react-native-dotenv'],
      }),
    },
  };
  