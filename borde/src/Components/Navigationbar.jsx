import React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";

function Navigationbar(props) {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home">BorDE</Navbar.Brand>
        <Navbar.Text>About Us</Navbar.Text>
        <NavDropdown title="Filter">
          <NavDropdown.Item
            onClick={() => props.setFilter("volunteer program")}
          >
            Volunteer Program
          </NavDropdown.Item>
          <NavDropdown.Item onClick={() => props.setFilter("food drive")}>
            Food Drive
          </NavDropdown.Item>
          <NavDropdown.Item onClick={() => props.setFilter("clothing drive")}>
            Clothing Drive
          </NavDropdown.Item>
          <NavDropdown.Item onClick={() => props.setFilter("fundraiser")}>
            Fundraiser
          </NavDropdown.Item>
          <NavDropdown.Item onClick={() => props.setFilter("walkathon")}>
            Walkathon
          </NavDropdown.Item>
          <NavDropdown.Item onClick={() => props.setFilter("marathon")}>
            Marathon
          </NavDropdown.Item>
          <NavDropdown.Item onClick={() => props.setFilter("sales")}>
            Sales
          </NavDropdown.Item>
          <NavDropdown.Item onClick={() => props.setFilter("furniture drive")}>
            Furniture Drive
          </NavDropdown.Item>
          <NavDropdown.Item onClick={() => props.setFilter("food program")}>
            Food Program
          </NavDropdown.Item>
        </NavDropdown>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;
