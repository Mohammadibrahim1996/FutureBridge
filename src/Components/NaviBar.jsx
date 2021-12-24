import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const NaviBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav>
            <Navbar.Brand className="nav-brand" href="#home">
              Future Bridge{" "}
            </Navbar.Brand>
            <NavLink id="navlink" to="/">
              Home
            </NavLink>
            <NavLink id="navlink" to="/about">
              About
            </NavLink>
            <NavLink id="navlink" to="/contact">
              Contact
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
