'use client'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from './Header.module.css';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="/Home" className={styles.logo}>
          <img
            alt=""
            src="/logo.jpeg"
            width="80"
            height="50"
            margin="20"
            className="d-inline-block align-top"

          />{' '}
          Car Agency
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/Home" style={{ marginRight: '70px' }}>Home</Nav.Link>
            <Nav.Link href="/NewCars" style={{ marginRight: '70px' }}>New</Nav.Link>
            <Nav.Link href="/UsedCars" style={{ marginRight: '70px' }}>Used</Nav.Link>
            <Nav.Link href="/ImportedCars" style={{ marginRight: '70px' }}>Imported</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/category/kia">KIA</NavDropdown.Item>
              <NavDropdown.Item href="/category/bmw">BMW</NavDropdown.Item>
              <NavDropdown.Item href="/category/toyota">TOYOTA</NavDropdown.Item>
              <NavDropdown.Item href="/category/ford">FORD</NavDropdown.Item>
              <NavDropdown.Item href="/category/nissan">NISSAN</NavDropdown.Item>
              <NavDropdown.Item href="/category/chevrolet">CHEVROLET</NavDropdown.Item>
            </NavDropdown> 
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" className={styles.customButton}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;