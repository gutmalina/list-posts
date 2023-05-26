import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import avatar from "../../images/avatar.svg";
import Image from "react-bootstrap/Image";
import { PATH_ABOUT, PATH_HOME } from "../../utils/constans";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar key={false} bg="light" expand={false} className="mb-3">
        <Container fluid>
          <Container >
            <Image src={avatar} width={50} height={50} />
            <Navbar.Brand href="#home">Name</Navbar.Brand>
            <Navbar.Brand href="#home">Email</Navbar.Brand>
          </Container>
          <Navbar.Toggle aria-controls='offcanvasNavbar-expand' />
          <Navbar.Offcanvas
            id='offcanvasNavbar-expand'
            aria-labelledby='offcanvasNavbarLabel-expand'
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id='offcanvasNavbarLabel-expand'>
                Раскрывающееся меню
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link as={Link} to={PATH_HOME}>All posts</Nav.Link>
                <Nav.Link as={Link} to={PATH_ABOUT}>About me</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
