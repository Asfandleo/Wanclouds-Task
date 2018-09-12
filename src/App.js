import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from './components/HomePage';
import MessagePage from'./components/MessagePage';
import Header from './components/Header';

class App extends Component {
    render() {
        return (
            <div >
                <Header/>
                <Switch>
                    <Route exact={true} path='/' render={() => (
                        <div>
                            <HomePage/>
                        </div>
                    )}/>
                    <Route exact={true} path='/message' render={() => (
                        <div>
                            <MessagePage />
                        </div>
                    )}/>
                </Switch>

            </div>
        );
    }
}

export default App;