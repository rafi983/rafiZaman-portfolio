import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Menubar.css";
import { NavLink } from "react-router-dom";

const Menubar = () => {
  return (
    <div>
      <Navbar className="navbar">
        <Container>
          <Nav className="ms-auto">
            <NavLink
              to="/home"
              className="navlink"
              style={{
                color: "#eab543 !important",
                fontSize: "1.2rem",
                fontWeight: 700,
                marginRight: "1.4rem",
              }}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="navlink"
              style={{
                color: "#eab543 !important",
                fontSize: "1.2rem",
                fontWeight: 700,
                marginRight: "1.4rem",
              }}
            >
              About
            </NavLink>
            <NavLink
              to="/projects"
              className="navlink"
              style={{
                color: "#eab543 !important",
                fontSize: "1.2rem",
                fontWeight: 700,
                marginRight: "1.4rem",
              }}
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              className="navlink"
              style={{
                color: "#eab543 !important",
                fontSize: "1.2rem",
                fontWeight: 700,
                marginRight: "1.4rem",
              }}
            >
              Contact
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menubar;
