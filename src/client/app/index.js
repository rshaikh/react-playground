import React from 'react';
import ReactDom from 'react-dom';
import Layout from './components/Layout';
import About from './components/About';
import Repos from './components/Repos';
import {Router, Route, hashHistory} from 'react-router';


ReactDom.render((
    <Router history={hashHistory}>
        <Route path="/" component={Layout}></Route>
        <Route path="/repos" component={Repos}></Route>
        <Route path="/about" component={About}></Route>
    </Router>
), document.getElementById('app'));
