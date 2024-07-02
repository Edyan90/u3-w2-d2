import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const MyNav = (props) => (
  <Navbar expand="lg">
    <Container className="mx-0">
      <Navbar.Brand href="#home">EPICBOOKS</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">About</Nav.Link>
          <Nav.Link href="#link">Browse</Nav.Link>
          <NavDropdown title="Category" id="basic-nav-dropdown">
            <NavDropdown.Item href="#">Fantasy</NavDropdown.Item>
            <NavDropdown.Item href="#">History</NavDropdown.Item>
            <NavDropdown.Item href="#">Horror</NavDropdown.Item>
            <NavDropdown.Item href="#">Romance</NavDropdown.Item>
            <NavDropdown.Item href="#">Scifi</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default MyNav;
