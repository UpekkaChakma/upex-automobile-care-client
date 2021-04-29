import React, { useState } from "react";
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink,
    MDBNavbarToggler, MDBCollapse, MDBBtn
} from "mdbreact";
import { Link } from 'react-router-dom';

const NavbarPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    }
    return (
        <MDBNavbar color="indigo" dark expand="md">
            <MDBNavbarBrand>
                <strong className="white-text">UPEX AUTO CARE</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={toggleCollapse} />
            <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
                <MDBNavbarNav className="d-flex align-items-center" right>
                    <MDBNavItem active>
                        <MDBNavLink as={Link} to="/home">Home</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink as={Link} to="/home">Contact</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink as={Link} to="home">About Us</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink as={Link} to="/login" ><MDBBtn className="py-2 px-3">Login</MDBBtn></MDBNavLink>
                    </MDBNavItem>
                </MDBNavbarNav>
            </MDBCollapse>
        </MDBNavbar>
    );
}

export default NavbarPage;