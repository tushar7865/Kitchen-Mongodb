import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { FaCartArrowDown } from "react-icons/fa";
import { googleLogout } from "@react-oauth/google";

export default function AppNavbar() {
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    googleLogout();
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/">Minu's Kitchen Mania</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/specials">Specialities</Nav.Link>
            <Nav.Link as={Link} to="/recipes">Recipes</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>

            {/* 🛒 Cart */}
            <Nav.Link as={Link} to="/cart" className="d-flex align-items-center">
              <FaCartArrowDown size={20} className="me-1" /> Cart
            </Nav.Link>

            {/* 👤 User Info OR Login */}
            {user ? (
              <Nav.Item className="d-flex align-items-center ms-3">
                <img
                  src={user.picture}
                  alt="Profile"
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    marginRight: "8px",
                  }}
                />
                <div className="d-flex flex-column me-2">
                  <strong style={{ fontSize: "14px", lineHeight: "1.2" }}>{user.name}</strong>
                  <span style={{ fontSize: "12px", color: "gray" }}>{user.email}</span>
                </div>
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </Nav.Item>
            ) : (
              <Nav.Item className="ms-3">
                <Button
                  as={Link}
                  to="/login"
                  variant="outline-primary"
                  size="sm"
                >
                  Login
                </Button>
              </Nav.Item>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
