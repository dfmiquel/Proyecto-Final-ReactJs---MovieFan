import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import "./navBar.css";
import logo from "../../images/MovieFan_Logo.webp";
import { CartWidget } from "../cartWidget/cartWidget";
import { Link } from "react-router-dom";
// import { Avatar, Dropdown,Icon } from '@douyinfe/semi-ui';
// import { IconStar, IconUser,IconUserGroup, IconSetting, IconEdit,IconHomeStroked } from '@douyinfe/semi-icons';

export const NavBar = () => {
  return (
    <Navbar className="navBar">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            className="d-inline-block align-center"
            alt="React Bootstrap logo"
          />
          {/* MovieFan */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/tienda">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/category/clothing">
              Ropa
            </Nav.Link>
            <Nav.Link as={Link} to="/category/posters">
              Posters
            </Nav.Link>
            <Nav.Link as={Link} to="/category/comics">
              Comics
            </Nav.Link>
            <Nav.Link as={Link} to="/category/toys">
              Juguetes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav.Link as={Link} to="/cart">
          <CartWidget />
        </Nav.Link>
      </Container>
    </Navbar>
  );
};
