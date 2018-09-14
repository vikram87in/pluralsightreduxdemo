<<<<<<< HEAD
import React from 'react';
import 'babel-polyfill';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import './styles/styles.css'; //webpack can import css files too
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render(
    <Router history={browserHistory} routes={routes} />
    ,document.getElementById('app')
=======
import React from 'react';
import 'babel-polyfill';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import './styles/styles.css'; //webpack can import css files too
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render(
    <Router history={browserHistory} routes={routes} />
    ,document.getElementById('app')
>>>>>>> a37834bb84baaa3fe82cae863ed6e292d5e75f78
);