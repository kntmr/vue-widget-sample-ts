const { resolve } = require('path')

module.exports = {
  pages: {
    index: {
      entry: 'src/main.ts',
      template: 'public/index.html',
      filename: 'index.html',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },
  devServer: {
    port: 3000,
    contentBase: resolve(__dirname, 'public'),
    host: 'localhost',
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          include: [resolve('src'), resolve('test')]
        },
      ]
    },
    resolve: {
      extensions: ['.js', 'ts', '.vue', '.json'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': resolve(__dirname, 'src/')
      }
    },
    plugins: []
  }
}
