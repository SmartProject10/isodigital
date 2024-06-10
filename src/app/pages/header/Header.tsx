import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import logo from '/img/logo.png'; 
function Header() {
  const navigate = useNavigate(); 

  const handleLogin = () => {
    navigate("/api/auth");
  };

  const demo = () => {
    navigate("/api/demo");
  };

  return (
    <Navbar
      fixed="top"
      bg="transparent"
      expand="lg"
      className="navbar"
      id="nav"
    >
      <Container fluid>
        <Navbar.Brand href="#">
          {/* <img src={logo} alt="Your logo description" /> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 text-white" navbarScroll>
            <Nav.Link style={{ fontSize: "1.8rem", fontWeight: "600" }} href="#" >
              Inicio
            </Nav.Link>
            <Nav.Link style={{ fontSize: "1.8rem", fontWeight: "600" }} href="#blog">Blog</Nav.Link>
            <Nav.Link style={{ fontSize: "1.8rem", fontWeight: "600" }} href="#features">Empleo</Nav.Link>
            <Nav.Link style={{ fontSize: "1.8rem", fontWeight: "600" }} href="#servicios">Soporte</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Button
              className="btn btn-danger btn-xl mx-2" // Added mx-2 class
              variant="outline-success"
              style={{ fontSize: "1.8rem", fontWeight: "600" }}
              onClick={handleLogin}
            >
              Iniciar Sesión
            </Button>
            <Button
              className="slideButton btn btn-warning btn-xl mx-2" // Added mx-2 class
              variant="outline-warning"
              style={{ fontSize: "1.8rem", fontWeight: "600" }}
              onClick={demo}
            >
              Solicitar Demo
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export { Header };
