import { KanbanApp } from "../../components/KanbanApp"
import { MenuNavigation } from "../../components/MenuNavigation"
import { DivScroll } from "./styles"

export function Tasks() {
  return (
    <>
      <MenuNavigation />
      <h1 style={{textAlign:'center', margin: '1rem 0'}}>Tasks</h1>
      <DivScroll>
        <KanbanApp />
      </DivScroll>
    </>
  )
}