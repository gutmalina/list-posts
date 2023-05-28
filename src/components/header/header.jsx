import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Stack from 'react-bootstrap/Stack';
import Image from "react-bootstrap/Image";
import { PATH_ABOUT, PATH_HOME } from "../../utils/constans";
import { Link } from "react-router-dom";
import { ABOUT_ME } from "../../utils/constans";
import image_me from '../../images/image_me.jpeg';

const Header = () => {
  return (
    <>
      <Navbar key={false} bg="light" expand={false} className="mb-4 p-3">
        <Container fluid>
          <Stack direction="horizontal" gap={3}>
            <Image src={image_me} style={{width: 80, height: 100, objectFit: 'cover', borderRadius: 10, border: '1px solid #0d6efd'}} />
            <Navbar.Text style={{fontSize: 24, fontWeight: "bold"}}>{ABOUT_ME.name}</Navbar.Text>
            <Navbar.Text style={{fontSize: 24, fontWeight: "bold"}}>{ABOUT_ME.email}</Navbar.Text>
          </Stack>
          <Navbar.Toggle aria-controls='offcanvasNavbar-expand' style={{width: 70, height: 70, border: '1px solid #0d6efd'}} />
          <Navbar.Offcanvas
            id='offcanvasNavbar-expand'
            aria-labelledby='offcanvasNavbarLabel-expand'
            placement="end"
            size='lg'
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
