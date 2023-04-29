import React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Navigationbar() {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home">BorDE</Navbar.Brand>
        <NavDropdown title="Community" id="basic-nav-dropdown">
          <NavDropdown.Item href="#events">Events</NavDropdown.Item>
          <NavDropdown.Item href="#people">People</NavDropdown.Item>
          <NavDropdown.Item href="#places">Places</NavDropdown.Item>
          <NavDropdown.Item href="#charity">Charity</NavDropdown.Item>
          <NavDropdown.Item href="#jobs">Jobs</NavDropdown.Item>
        </NavDropdown>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;
