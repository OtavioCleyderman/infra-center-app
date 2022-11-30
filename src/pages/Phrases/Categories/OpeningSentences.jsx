import { MenuNavigation } from "../../../components/MenuNavigation"
import { Container, DropdownContainer } from "../styles"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Accordion from 'react-bootstrap/Accordion';
import PhrasesAPI from '../../../assets/services/apis/PhrasesAPI.json'
import { Link } from 'react-router-dom'


export function OpeningSentences() {
  return (
    <>
      <MenuNavigation />  
      <Container>
        <h1>Frases de Início</h1>
        <DropdownButton id="dropdown-basic-button" title="Categorias">
          <Dropdown.Item as={Link} to="/phrases/opening">Frases de Inicio</Dropdown.Item>
          <Dropdown.Item as={Link} to="/phrases/leading-phrases">Frases para condução</Dropdown.Item>
          <Dropdown.Item as={Link} to="/phrases/closing">Frases de encerramento</Dropdown.Item>
        </DropdownButton>
      </Container>
      <DropdownContainer>
        {PhrasesAPI.OpeningSentences.map((opening) => (
          <Accordion key={opening.id}>
          <Accordion.Item eventKey="1">
            <Accordion.Header>{opening.title}</Accordion.Header>
            <Accordion.Body>
              {opening.content}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        ))}
      </DropdownContainer>

    </>
  )
}