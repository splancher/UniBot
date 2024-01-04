import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import styled from "styled-components";

const StyledNavbar = styled(Navbar)`
  background-color: #146ae3; /* Updated background color */
`;
const MainNavbar = () => {
    return (
        <StyledNavbar variant="dark" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand href="/">UniBot</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/motivation">Motivations</Nav.Link>
                    <Nav.Link href="/chat">Chat</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </StyledNavbar>
    );
};

export default MainNavbar;
