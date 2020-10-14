import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from "./Home.js";
import Blank from "./Blank.js";
import About from "./About.js";

class RouterPath extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/about' component={About}/>
                    <Route exact path='/blank' component={Blank}/>
                </Switch>
            </main>
        )
    }
}

export default RouterPath