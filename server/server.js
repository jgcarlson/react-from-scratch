/* eslint-disable no-console */
require('dotenv').config();
const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const app = express();

const DIST_DIR = path.resolve('dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');
const DEFAULT_PORT = 3000;
const IS_DEV = process.env.NODE_ENV !== 'production';
const config = IS_DEV ? require('./../config/webpack.dev.config') : require('./../config/webpack.prod.config');
const compiler = webpack(config);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.set('port', process.env.PORT || DEFAULT_PORT);

if (IS_DEV) {

  app.use(logger('dev'));

  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));

  app.use(webpackHotMiddleware(compiler));

  app.get('*', (req, res, next) => {
    compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {
      if (err) {
        return next(err);
      }
      res.set('content-type', 'text/html');
      res.send(result);
      res.end();
    });
  });

  app.listen(app.get('port'), (err) => {
    if (err) {
      console.log('There was an error starting the server.');
    } else {
      console.log(`---------------------------- Server started on port ${app.get('port')} in ${app.get('env')} mode ----------------------------`);
    }
  });

} else {
  app.use(express.static(DIST_DIR));
  app.get('*', (req, res) => {
    res.set('content-type', 'text/html');
    res.sendFile(HTML_FILE);
  });
  app.listen(app.get('port'), (err) => {
    if (err) {
      console.log(`Error starting server in ${app.get('env')} mode:`, err);
    } else {
      console.log(`server running on ${app.get('port')} in ${app.get('env')} mode`);
    }
  });
}
