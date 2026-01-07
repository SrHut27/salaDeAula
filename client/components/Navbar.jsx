import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'next/image'; 
import logo from '../public/headermp.png'; 

function NavbarLine() {
  return (
    <Navbar expand="lg" className="bg-black text-white custom-navbar py-3">
      <Container>
        <Navbar.Brand
          href="https://mariaperegrina.org.br/"
          className="text-white d-flex align-items-center fonte-navbar brand-navbar"
        >
          <Image
            src={logo}
            alt="Logo Maria Peregrina"
            width={90}         // ← Aumenta a largura da logo
            height={80}        // ← Aumenta a altura da logo
            className="me-3"   // ← Espaço maior entre logo e texto
            priority           // ← Garante que a logo carregue rápido
          />
          <span style={{ fontSize: '1.4rem', fontWeight: 'bold' }}>
            Escola Maria Peregrina
          </span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0">
          <span
            className="navbar-toggler-icon"
            style={{ filter: 'invert(1)' }}
          ></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fonte-navbar">
            <Nav.Link href="#amaiorsala" className="text-white">
              A Maior Sala
            </Nav.Link>

            <Nav.Link href="#sala" className="text-white">
              Para caber o Mundo
            </Nav.Link>

            <NavDropdown
              title={<span className="text-white">Saiba Mais</span>}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="https://mariaperegrina.org.br/">
                Quem somos
              </NavDropdown.Item>

              <NavDropdown.Divider />

              <NavDropdown.Item href="#comoajudar">
                Como ajudar
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarLine;
