import { MenuNavigation } from "../../components/MenuNavigation"
import  { NotesApp }   from "../../components/NotesApp"
import { Container } from './styles'

export function Notes() {
  return (
  <>
    <MenuNavigation />
    <Container>
      <NotesApp />
    </Container>
  </>
  )
}