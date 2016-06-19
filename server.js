var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  headers: { 'Access-Control-Allow-Origin': '*' }
}).listen(3030, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3030');
});
