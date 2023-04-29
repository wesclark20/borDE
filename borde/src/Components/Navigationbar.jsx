import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navigationbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">BorDE</Navbar.Brand>
      <Nav.Link href="#Events">Events</Nav.Link>
      <Nav.Link href="#Locations">Locations</Nav.Link>
    </Navbar>
  );
}

export default Navigationbar;
