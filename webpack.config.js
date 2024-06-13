const path = require('path');

module.exports = {
    entry: './src/index.js',
    output:  {
        path: path.resolve(__dirname, 'dist/assets'),
        filename: 'bundle.js',
        publicPath: '/assets/',
    },
    devServer: {
        static: {
          directory: path.resolve(__dirname, 'dist'), // Use static.directory
        },
      },
    module: {
      rules: [
        {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
    }  
};

