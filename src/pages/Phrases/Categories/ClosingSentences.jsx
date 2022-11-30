import { MenuNavigation } from "../../../components/MenuNavigation"
import { Container, DropdownContainer } from "../styles"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Accordion from 'react-bootstrap/Accordion';
import PhrasesAPI from '../../../assets/services/apis/PhrasesAPI.json'
import { Link } from 'react-router-dom'


export function ClosingSentences() {
  return (
    <>
      <MenuNavigation />  
      <Container>
        <h1>Frases de encerramento</h1>
        <DropdownButton id="dropdown-basic-button" title="Categorias">
          <Dropdown.Item as={Link} to="/phrases/opening">Frases de Inicio</Dropdown.Item>
          <Dropdown.Item as={Link} to="/phrases/leading-phrases">Frases para condução</Dropdown.Item>
          <Dropdown.Item as={Link} to="/phrases/closing">Frases de encerramento</Dropdown.Item>
        </DropdownButton>
      </Container>
      <DropdownContainer>
        {PhrasesAPI.ClosingSentences.map((closing) => (
          <Accordion key={closing.id}>
          <Accordion.Item eventKey="1">
            <Accordion.Header>{closing.title}</Accordion.Header>
            <Accordion.Body>
              {closing.content}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        ))}
      </DropdownContainer>

    </>
  )
}