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
        <Navbar.Text>About Us</Navbar.Text>
        <NavDropdown title="Filter">
          <NavDropdown.Item>Volumnteer Program</NavDropdown.Item>
          <NavDropdown.Item>Food Drive</NavDropdown.Item>
          <NavDropdown.Item>Clothing Drive</NavDropdown.Item>
          <NavDropdown.Item>Fundraiser</NavDropdown.Item>
          <NavDropdown.Item>Walkathon</NavDropdown.Item>
          <NavDropdown.Item>Marathon</NavDropdown.Item>
          <NavDropdown.Item>Sales</NavDropdown.Item>
          <NavDropdown.Item>Furniture Drive</NavDropdown.Item>
          <NavDropdown.Item>Food Program</NavDropdown.Item>
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
