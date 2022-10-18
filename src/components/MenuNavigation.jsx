import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import {StyledContainer} from './styles/styleMenuNavigation'

export function MenuNavigation(){
  return (
    <StyledContainer >
      <Navbar collapseOnSelect expand="sm" bg="red" variant="light">
        <Container className='navBar'>
          <Navbar.Brand as={Link} to="/">Infra Center</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto" >
              <Nav.Link as={Link} to="/">Início</Nav.Link>
              <Nav.Link as={Link} to="/phrases">Frases</Nav.Link>
              <Nav.Link as={Link} to="/my-tasks">Minhas demandas</Nav.Link>
              <Nav.Link as={Link} to="/account">Conta</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </StyledContainer>
  )
}