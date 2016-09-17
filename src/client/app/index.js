import React from 'react';
import ReactDom from 'react-dom';
import Layout from './components/Layout';
import About from './components/About';
import Repos from './components/Repos';
import {Router, Route, hashHistory} from 'react-router';


ReactDom.render((
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <Route path="/repos/:userName/:repo" component={Repos} activeClassName="active"></Route>
            <Route path="/about" component={About} activeClassName="active"></Route>
        </Route>
    </Router>
), document.getElementById('app'));
