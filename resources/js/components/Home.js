import React, {Component} from 'react';
import {HashRouter , Link} from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <HashRouter>
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>AdminLTE 3.0.5 Laravel 7 + React JS</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                            <li className="breadcrumb-item"><Link className="js-scroll-trigger" to={'/'}>Home</Link></li>
                            <li className="breadcrumb-item active">Home Page</li>
                            </ol>
                        </div>
                        </div>
                    </div>
                </section>

                <section className="content">

                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Home Page</h3>

                            <div className="card-tools">
                            <button type="button" className="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                                <i className="fas fa-minus"></i></button>
                            <button type="button" className="btn btn-tool" data-card-widget="remove" data-toggle="tooltip" title="Remove">
                                <i className="fas fa-times"></i></button>
                            </div>
                        </div>
                        <div className="card-body">
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                It has survived not only five centuries, but also the leap into electronic typesetting, 
                                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                                sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
                                like Aldus PageMaker including versions of Lorem Ipsum.                
                            </p>
                        </div>

                        <div className="card-footer">
                            Footer
                        </div>
                    </div>

                </section>
            </HashRouter>
        )
    }
}

export default Home