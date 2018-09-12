import React from 'react';
import { Route, Router } from 'react-router';
import HomePage from './components/HomePage';
import MessagePage from './components/MessagePage';

export default (
    <Router>
        <Route path="/" components={HomePage}/>
        <Route path="/message" components={MessagePage}/>
    </Router>
);