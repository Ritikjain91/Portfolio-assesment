import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Container, Row, Col, Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const NavBar = () => {
    return (
        <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">Profile </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/home">Projects</Nav.Link>
            <Nav.Link href="/animaldetail">Form</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
          </Nav>

          
 
 
        </Navbar>
   
      
      
      </>
    );
}

export default NavBar;
