import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import styled from "styled-components";
import {Link} from "react-router-dom";

const StyledNavbar = styled(Navbar)`
  background-color: #146ae3; /* Updated background color */
`;

const MainNavbar = () => {
    return (
        <StyledNavbar variant="dark" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand>
                    unibzBot
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                    <Nav.Link as={Link} to={"/chat"}>Chat</Nav.Link>
                    <Nav.Link href="https://forms.gle/6ypc4VK53BJRXd9s7" target="_blank">Survey</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </StyledNavbar>
    );
};

export default MainNavbar;
