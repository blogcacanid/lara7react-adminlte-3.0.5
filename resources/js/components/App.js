import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {HashRouter , Link} from 'react-router-dom';
import RouterPath from './RouterPath';
import Header from "./_layouts/Header.js";
import Sidebar from "./_layouts/Sidebar.js";
import Footer from "./_layouts/Footer.js";

export default class App extends Component {
    render() {
        return (
            <HashRouter>
                <Header />
                <Sidebar />
                <div className="content-wrapper"><RouterPath/></div>
                <Footer />
            </HashRouter >
        )
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(
        <App/>,
        document.getElementById('app'));
}