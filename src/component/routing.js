import React, {  Component } from 'react';
import { BrowserRouter, Route,Link} from 'react-router-dom';

import ListView from './listView';


class Routing extends Component{
    render(){
        return(
            <BrowserRouter>
            <div>
                <header>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand">Developer Funnel</a>
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                        </ul>
                        
                        </div>
                    </div>
                    </nav>
                </header>
                <Route exact path="/" component={ListView}></Route>
            </div>
            </BrowserRouter>
        )
    }
}

export default Routing;