import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import { Collapse, Button } from 'reactstrap';

import logo from '../components/logo.svg'
import '../assets/css/Navbar.css'


class Header extends Component{

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false, showLogOut:true };
    }

    toggle() {
        this.setState(state => ({ collapse: !state.collapse }));
    }

    render(){
        return(
                <header>
                    <nav class="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mr-auto">
                                <li class="nav-item active">
                                    <a class="nav-link" href="#">
                                    <i class="fa fa-home"></i>
                                    <Link className="navbar-brand" to='/'>
                                        <img src={logo} width="30" height="30" className="d-inline-block align-top" alt=""/>
                                        <span class="text-uppercase font-weight-bold">Ethos Squad E-Learning</span>
                                    </Link>
                                    <span class="sr-only">(current)</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                    <i class="fa fa-book">
                                        <span class="badge badge-danger">11</span>
                                    </i>
                                    Courses
                                    </a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="fa fa-users">
                                        <span class="badge badge-primary">11</span>
                                    </i>
                                        Moderators
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a class="dropdown-item" href="#">Action</a>
                                        <a class="dropdown-item" href="#">Another action</a>
                                    <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </li>
                                </ul>
                                <ul class="navbar-nav ">
                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                    <i class="fa fa-bell">
                                        <span class="badge badge-info">11</span>
                                    </i>
                                    Notification
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                    <i class="fa fa-globe">
                                        <span class="badge badge-success">11</span>
                                    </i>
                                    Test
                                    </a>
                                </li>
                            </ul>
                            <form class="form-inline my-2 my-lg-0">
                                <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                         
                                {!window.localStorage.authenticated&&<button class="btn btn-outline-success my-2 my-sm-0"><Link to='/login'>Log In</Link></button>}
                                {!window.localStorage.authenticated&&<button class="btn btn-outline-success my-2 my-sm-0"><Link to='/signup'>Sign Up</Link></button>}
                                {this.state.showLogOut&&<button onClick={()=>{this.setState({showLogOut:false});window.localStorage.removeItem('authenticated')}} class="btn btn-outline-success my-2 my-sm-0">Log out</button>}
                        </div>
                    </nav>
                </header>
        )
    }


}

export default Header;