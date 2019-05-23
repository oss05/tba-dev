import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import Logo from '../assets/logoTuranzas.png';
import "../styles/navbar.css"

class navbar extends Component {
    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }
    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }


    render() {
        return (
            <div className="custom-nav">
                <Navbar color="transparent" light>
                    <Link to="/" className="mr-auto logoNav">
                        <img src={Logo} alt="logo turanzas" /></Link>
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                    <Collapse className="expandedNavC" isOpen={!this.state.collapsed} navbar>
                        <Nav navbar>
                            <NavItem className="navItem">
                                <Link className="navLink" to="/firma">{this.props.data.areas.firma.nombre}</Link>
                            </NavItem>
                            <NavItem className="navItem">
                                <Link className="navLink" to="/practica">{this.props.data.areas.practica}</Link>
                            </NavItem>
                            <NavItem className="navItem">
                                <Link to="/equipo">{this.props.data.areas.equipo}</Link>
                            </NavItem>
                            <NavItem className="navItem">
                                <Link to="/publicaciones">{this.props.data.areas.publicaciones}</Link>
                            </NavItem>
                            <NavItem className="navItem">
                                <Link to="/oficinas">{this.props.data.areas.oficinas}</Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default navbar;