import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class Navbar extends Component {
    state = {}
    render() {
        return (
            <div className="container-fluid nav_bg">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="/">
                        TalksTechy :) {process.env.NODE_ENV}
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto">
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
                            <li className="dropdown nav-item"><NavLink className="nav-link dropdown-toggle" data-toggle="dropdown" exact to="#">React Example <span className="caret"></span></NavLink>
                                <ul className="dropdown-menu">
                                    <li className="nav-item">
                                        <NavLink className="nav-link" exact to="/todo">Todo</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" exact to="/greet">Greeting</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" exact to="/page">Pagination</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" exact to="/reactpage">reactpage</NavLink>
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
                                        <NavLink className="nav-link" exact to="services">Lazy Loading Images</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" exact to="chart-graph">Chart Graph</NavLink>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav >
            </div>
        );
    }
}

export default Navbar;
