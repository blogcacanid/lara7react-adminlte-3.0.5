import React, {Component} from 'react';
import {HashRouter , Link} from 'react-router-dom';
 
export default class Sidebar extends Component {
    render(){
        return (
            <HashRouter>
                <aside className="main-sidebar sidebar-dark-primary elevation-4">

                    <Link className="brand-link js-scroll-trigger" to={'/'}>
                        <img src="assets/dist/img/AdminLTELogo.png"
                            alt="AdminLTE Logo"
                            className="brand-image img-circle elevation-3" 
                            style={{ opacity: .8 }} /> 
                        <span className="brand-text font-weight-light">AdminLTE 3</span>
                    </Link>
                
                    <div className="sidebar">
                
                        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                            <div className="image">
                            <img src="https://cacan.id/wp-content/uploads/my_blog/cacan-400x400.jpg" className="img-circle elevation-2" alt="User Image" />
                            </div>
                            <div className="info">
                            <a href="https://www.cacan.id" target="_blank" className="d-block">Rony Chandra Kudus</a>
                            </div>
                        </div>
                    
                        <nav className="mt-2">
                            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    
                            <li className="nav-item">
                                <Link className="nav-link js-scroll-trigger" to={'/'}>
                                    <i className="nav-icon fas fa-home"></i>
                                    <p>
                                        Home
                                        <span className="right badge badge-danger">New</span>
                                    </p>
                                </Link>
                            </li>
                            <li className="nav-item has-treeview">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-book"></i>
                                    <p>
                                        Pages
                                        <i className="fas fa-angle-left right"></i>
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <Link className="nav-link js-scroll-trigger" to={'/blank'}>
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Blank Page</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link js-scroll-trigger" to={'/about'}>
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>About</p>
                                    </Link>
                                </li>
                                </ul>
                            </li>
                            </ul>
                        </nav>
                    </div>
                </aside>
            </HashRouter>
        )
    }
}
