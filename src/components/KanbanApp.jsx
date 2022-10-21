import React, { useEffect, useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { v4 as uuidv4 } from 'uuid'
import { AddCardModal } from "./Modals"
import { BsPlusSquare } from "react-icons/bs";
import { ContainerTasks } from "./styles/styleKanbanApp"
import { RiDeleteBin5Line } from 'react-icons/ri'


const taskItems = JSON.parse(localStorage.getItem('taskItems'))
const tasks = JSON.parse(localStorage.getItem('tasks'))

let kanbanItems = taskItems ? taskItems : []


const baseKanbanColumns = [
  {
    name: "To do",
    id: uuidv4(),
    items: kanbanItems,
  }, 
  {
    name: "Doing",
    id: uuidv4(),
    items: [],
  },
  {
    name: "Done",
    id: uuidv4(),
    items: [],
  }
]

const kanbanColumns = tasks ? tasks : baseKanbanColumns




export function KanbanApp() {
  const [columns, setColumns] = useState(kanbanColumns)
  
  let sourceColumnItems = []
  let destinationColumnItems = []
  let draggedItem = {}
  let sourceColumnId = 0
  let destinationColumnId = 0

const [modalShow, setModalShow] = useState(false)

const deleteTasksDone = () => {
  let columnsCopy = JSON.parse(JSON.stringify(columns))
      columnsCopy[2].items = []
      setColumns(columnsCopy)
      localStorage.setItem('tasks', JSON.stringify(columnsCopy))
      
}


  const onDragEnd = (result) => {
    console.log(result)
    for (let i in columns) {
      if(columns[i].id == result.source.droppableId) {
        sourceColumnItems = columns[i].items
        sourceColumnId = i
      } else if(columns[i].id == result.destination.droppableId) {
        destinationColumnItems = columns[i].items
        destinationColumnId = i
       
      }
    }

    for(let i in sourceColumnItems) {
      if(sourceColumnItems[i].id == result.draggableId) {
        draggedItem = sourceColumnItems[i]
      }
    }




    // Excluí objeto arastado.
    let filteredSourceColumnItems = sourceColumnItems.filter((item) => item.id != result.draggableId)


    // Adicionar o objeto arrastado para a nova posição
    if(result.source.droppableId == result.destination.droppableId) {
      filteredSourceColumnItems.splice(result.destination.index, 0, draggedItem)
      // Mudar o state
      let columnsCopy = JSON.parse(JSON.stringify(columns))
      columnsCopy[sourceColumnId].items = filteredSourceColumnItems
      setColumns(columnsCopy)

      // localStorage.setItem('tasks', JSON.stringify(columns)) // state acabou não sendo alterado, verificar o motivo depois
      localStorage.setItem('tasks', JSON.stringify(columnsCopy))
      
    } else {
      destinationColumnItems.splice(result.destination.index, 0, draggedItem)
      // Mudar o state
      let columnsCopy = JSON.parse(JSON.stringify(columns))
      columnsCopy[sourceColumnId].items = filteredSourceColumnItems
      columnsCopy[destinationColumnId].items = destinationColumnItems
      setColumns(columnsCopy)

      // localStorage.setItem('tasks', JSON.stringify(columns)) // state acabou não sendo alterado, verificar o motivo depois
      localStorage.setItem('tasks', JSON.stringify(columnsCopy))
    }

    
  }

  return (
    <div style={{ display: "block"}}>
    
      <div style={{ display: "flex", justifyContent: "center" }}>
        <DragDropContext onDragEnd={onDragEnd}>
          {columns.map((column) => (
            <ContainerTasks key={column.id} style={{ display: "flex", flexDirection:"column", alignItems:"center"}}>
              <h2>{column.name}</h2>
              <div className='addTask' onClick={() => setModalShow(true)}>
                <span className='spanIcons' style={{marginRight: 5}}>Adicionar tarefa <BsPlusSquare /> </span> 
              </div>
              <div className='deleteTasksDone' onClick={deleteTasksDone}>
                <span className='spanIcons' style={{marginRight: 5}}>Excluir tarefas realizadas <RiDeleteBin5Line /></span> 
              </div>
              <AddCardModal 
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
              <Droppable  droppableId={column.id} key={column.id}>
                {(provided) => (
                  <div 
                    
                    ref={provided.innerRef} 
                    style={{ backgroundColor: "lightblue", width: 250, height: 500, padding: 5, margin: 10 }}
                  >
                    {column.items.map((item, index) => (
                      <Draggable  draggableId={item.id} index={index} key={item.id}>
                        {(provided) => (
                          <div 
                            className='card-task'
                            {...provided.dragHandleProps}
                            {...provided.draggableProps}
                            ref={provided.innerRef} 
                            style={{ ...provided.draggableProps.style }}
                          > 
                            <div  style={{display: 'flex', flexDirection: "column", alignItems: "center"}}>
                              {item.title}  
                              <div>
                                {item.description}       
                              </div>    
                            </div>                 
                          </div>
                          )}
                      </Draggable>
                    ))}
                  {provided.placeholder}
                </div>
                )}
              </Droppable>
            </ContainerTasks>  
          ))}
        </DragDropContext>
      </div>
    </div>  
  )

  
  
}

