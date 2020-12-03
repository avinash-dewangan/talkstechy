import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class Navbar extends Component {
    state = {}
    render() {
        return (
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">


                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <Link className="navbar-brand" to="/">
                                TalksTechy :)
                </Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <NavLink className="nav-link" exact to="/">Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" exact to="/services">Services</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" exact to="/about">About</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" exact to="/contact">Contact</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" exact to="/docs">Docs</NavLink>
                                    </li>

                                    {/* <li className="nav-item">
                                <NavLink className="nav-link" exact to="/todo">Todo</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/react-hooks">ReactHooks</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/react-event">ReactEvent</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="live-search">Live Search</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/pagination">Pagination</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/e-com-home-page">E-Commerce Home</NavLink>
                            </li>

                            <li class="dropdown nav-item"><NavLink class="nav-link dropdown-toggle" data-toggle="dropdown" exact to="#">Page 1 <span className="caret"></span></NavLink>
                                <ul className="dropdown-menu bg-primary">
                                    <li><NavLink className="nav-link" exact to="#">Page 1-1</NavLink></li>
                                    <li><NavLink className="nav-link" exact to="#">Page 1-2</NavLink></li>
                                    <li><NavLink className="nav-link" exact to="#">Page 1-3</NavLink></li>
                                </ul>
                            </li> */}
                                </ul>
                            </div>
                        </nav >
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;
