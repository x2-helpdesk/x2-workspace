const path = require('path');

module.exports = {
  context: path.resolve('./src'),
  entry: {
    'x2-bootstrap': './x2-bootstrap/index.js',
    'x2-workspace': './x2-workspace/index.jsx'
  },
  externals: {
    antd: 'antd',
    classnames: 'classnames',
    'prop-types': 'prop-types',
    react: 'react',
    'react-dom': 'react-dom'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  output: {
    publicPath: '/assets',
    libraryTarget: 'umd',
    library: {
      amd: 'x2-workspace',
      commonjs: 'x2-workspace',
      root: 'x2'
    }
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['eslint-loader']
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: { cacheDirectory: true }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
              localIdentName: 'x2-[path]-[local]'
            }
          },
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      }
    ]
  },
  plugins: [],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          enforce: true
        }
      }
    }
  }
};
