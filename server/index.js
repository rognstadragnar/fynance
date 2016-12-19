import express from 'express';
import path from 'path';
import routes from './routes/routes.js';
import BodyParser from 'body-parser';

let app = express();
app.use(BodyParser.urlencoded({ extended: false }))
app.use(BodyParser.json())

// --------- W E B P A C K I N G ----------
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev.js';
const webpackCompiler = webpack(webpackConfig);
app.use(webpackMiddleware(webpackCompiler, {
    hot: true,
    publicPath: webpackConfig.output.publicPath,
    noInfo: true
}));
app.use(webpackHotMiddleware(webpackCompiler));


// --------- DEFINING VIEWS AND ROUTES
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');
app.use('/', routes);
app.use('/static', express.static(__dirname + '/server/_static'));



app.listen(3000, () => console.log('Server running on localhost:3000'));
