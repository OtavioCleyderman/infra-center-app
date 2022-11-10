import { MenuNavigation } from "../../components/MenuNavigation"
import { Container } from "./styles"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link } from 'react-router-dom'

export function Phrases() {
  return (
    <>
      <MenuNavigation />  
      <Container>
        <h1>Frases pré-definidas</h1>
        <DropdownButton className="categories-button" id="dropdown-basic-button" title="Categorias">
          <Dropdown.Item as={Link} to="/phrases/opening">Frases de Inicio</Dropdown.Item>
          <Dropdown.Item as={Link} to="/phrases/leading-phrases">Frases para condução</Dropdown.Item>
          <Dropdown.Item as={Link} to="/phrases/closing">Frases de encerramento</Dropdown.Item>
        </DropdownButton>
      </Container>
    </>
  )
}

