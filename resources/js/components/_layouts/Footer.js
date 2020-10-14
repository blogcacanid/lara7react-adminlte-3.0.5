import React, {Component} from 'react';
 
export default class Footer extends Component {
    render(){
        return (
            <footer className="main-footer">
                <div className="float-right d-none d-sm-block">
                    <b>Version</b> 3.0.5
                </div>
                <strong>Copyright &copy; 2020 <a href="https://www.cacan.id" target="_blank">cacan</a>.</strong> All rights reserved.
            </footer>
        )
    }
}
