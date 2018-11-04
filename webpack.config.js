var path = require('path')
// libreria de webpack
var webpack = require('webpack')

module.exports = {
  // archivo de entrada arbol en base a la estructura de archivos que se utilicen
  entry: './src/main.js',
  // donde va a generar el archivo final
  output: {
    // donde se va a utilizar ~ donde esta la carpeta
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    // nombre del archivo que se va a generar todo el contenido de la app
    filename: 'build.js'
  },
  module: {
    // transforamciones compilaciones de entrada y salida
    rules: [{
      test: /\.css$/,
      use: [
        'vue-style-loader',
        'css-loader'
      ]
    },
    {
      test: /\.scss$/,
      use: [
        'vue-style-loader',
        'css-loader',
        'sass-loader'
      ]
    },
    {
      test: /\.sass$/,
      use: [
        'vue-style-loader',
        'css-loader',
        'sass-loader?indentedSyntax'
      ]
    },
    {
      test: /\.(js|vue)$/,
      loader: 'eslint-loader',
      enforce: 'pre',
      include: [path.resolve(__dirname, './src')]
    },
    {
      test: /\.vue$/,
      // compilar los archivos .vue a js
      loader: 'vue-loader',
      options: {
        loaders: {
          // decirle que compile css o sass
          'scss': [
            'vue-style-loader',
            'css-loader',
            'sass-loader'
          ],
          'sass': [
            'vue-style-loader',
            'css-loader',
            'sass-loader?indentedSyntax'
          ]
        }
        // other vue-loader options go here
      }
    },
    {
      // se le aplicara la transformacion babel(utilizar ultimas versonas de ECMAscript) loader
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    },
    {
      // incluir en el archivo final imagenes o archivos staticos
      test: /\.(png|jpg|gif|svg)$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]'
      }
    }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, './src')
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  // servir la aplicacion en webpack
  devServer: {
    historyApiFallback: true,
    // mostrar la informacion en consola de los errores por defecto es true
    noInfo: false,
    overlay: true
  },
  // ver vistas con posible errores de performance
  performance: {
    hints: false
  },
  // mapear nuestro codigo
  devtool: '#eval-source-map'
}
// evalua si estamos corriendo webpack para produccion o NO
if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
