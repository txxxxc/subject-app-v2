module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules(?!\/@storybook\/addon-info)/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: require.resolve('react-docgen-typescript-loader'),
          },
          {
            loader: require.resolve('@storybook/source-loader'),
            options: { parser: 'typescript' },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx'],
  },
};
