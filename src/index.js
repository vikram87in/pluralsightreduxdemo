
import React from 'react';
import {Provider} from 'react-redux';
import 'babel-polyfill';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/styles.css'; //webpack can import css files too
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import configureStore from './store/configureStore';
import {loadCourses} from './actions/courseActions';

const store = configureStore();
store.dispatch(loadCourses());
render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>
    , document.getElementById('app')
);