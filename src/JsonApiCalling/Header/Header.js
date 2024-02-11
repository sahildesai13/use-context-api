import {Container,Nav,Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='mb-5 pb-1 bg-dark'>
    <Navbar expand="lg" className='border-bottom' fixed="top" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>POST</Nav.Link>
            <Nav.Link as={Link} to='/Comments'>COMMENTS</Nav.Link>
            <Nav.Link as={Link} to='/Album'>ALBUMS</Nav.Link>
            <Nav.Link as={Link} to='/Photos'>PHOTOS</Nav.Link>
            <Nav.Link as={Link} to='/Todo'>TODO</Nav.Link>
            <Nav.Link as={Link} to='/User'>USER</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default Header;