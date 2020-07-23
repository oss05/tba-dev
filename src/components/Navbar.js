import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import Logo from '../assets/LogoTBA.png';
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

    handleClick = (e) => {
        this.setState({
            collapsed: true
        });
    }

    render() { 
        return (
            <div className="custom-nav">
                <Navbar color="transparent" light>
                    <Link to={`/${this.props.thirdRoute}`} className="mr-auto logoNav" onClick={this.handleClick}>
                        <img src={Logo} alt="logo turanzas" />
                    </Link>
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                    <Collapse className="expandedNavC" isOpen={!this.state.collapsed} navbar>
                        <Nav navbar>
                            <NavItem className="navItem" >
                                <Link className="navLink" onClick={this.handleClick} to="/firma">{this.props.data.areas.firma.nombre}</Link>
                            </NavItem>
                            <NavItem className="navItem">
                                <Link className="navLink" onClick={this.handleClick} to="/areas/home">{this.props.data.areas.practica.nombre}</Link>
                            </NavItem>
                            <NavItem className="navItem">
                                <Link to="/equipo/" onClick={this.handleClick}>{this.props.data.areas.equipo.nombre}</Link>
                            </NavItem>
                            <NavItem className="navItem">
                                <Link to={`/${this.props.route}/publicaciones/2020`} onClick={this.handleClick}>{this.props.data.areas.publicaciones.nombre}</Link>
                            </NavItem>
                            <NavItem className="navItem">
                                <Link to="/oficinas" onClick={this.handleClick}>{this.props.data.areas.oficinas}</Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default navbar;