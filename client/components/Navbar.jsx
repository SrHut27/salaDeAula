import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'next/image'; 
import logo from '../public/logo.png'; 

function NavbarLine() {
  return (
    <Navbar expand="lg" className="bg-black text-white custom-navbar">
      <Container>
      <Navbar.Brand href="https://mariaperegrina.org.br/" className="text-white d-flex align-items-center">
          <Image src={logo} alt="Logo" width={35} height={45} className="me-2" />
          Escola Maria Peregrina
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0">
          <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }}></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"> 
            <Nav.Link href="#amaiorsala" className="text-white">A Maior Sala</Nav.Link>
            <Nav.Link href="#sala" className="text-white">Para caber o Mundo</Nav.Link>
            <NavDropdown title={<span className="text-white">Saiba Mais</span>} id="basic-nav-dropdown">
              <NavDropdown.Item href="https://mariaperegrina.org.br/escola/sustentabilidade-socio-ambiental">Quem somos</NavDropdown.Item>
              <NavDropdown.Item href="https://mariaperegrina.org.br/seja-amigo/sustentabilidade-socio-ambiental">Outros projetos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#comoajudar">Como ajudar?</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarLine;
