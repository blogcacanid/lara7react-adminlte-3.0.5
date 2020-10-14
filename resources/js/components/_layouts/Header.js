import React, {Component} from 'react';
import {HashRouter , Link} from 'react-router-dom';

export default class Header extends Component {
    render(){
        return (
            <HashRouter>
                <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars"></i></a>
                        </li>
                        <li className="nav-item d-none d-sm-inline-block">
                            <Link className="nav-link js-scroll-trigger" to={'/'}>Home</Link>
                        </li>
                        <li className="nav-item d-none d-sm-inline-block">
                            <a href="#" className="nav-link">Contact</a>
                        </li>
                    </ul>
                </nav>
            </HashRouter>
        )
    }
}
