import React, {Component} from 'react';
import {HashRouter , Link} from 'react-router-dom';

class About extends Component {
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
                            <li className="breadcrumb-item active">About Page</li>
                            </ol>
                        </div>
                        </div>
                    </div>
                </section>

                <section className="content">

                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">About Page</h3>

                            <div className="card-tools">
                            <button type="button" className="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                                <i className="fas fa-minus"></i></button>
                            <button type="button" className="btn btn-tool" data-card-widget="remove" data-toggle="tooltip" title="Remove">
                                <i className="fas fa-times"></i></button>
                            </div>
                        </div>
                        <div className="card-body">
                            <p>
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece 
                                of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, 
                                a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure 
                                Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in 
                                classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 
                                and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, 
                                written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. 
                                The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            </p>
                            <p>
                                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. 
                                Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced 
                                in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.                
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

export default About