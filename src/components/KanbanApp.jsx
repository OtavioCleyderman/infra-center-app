import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { v4 as uuidv4 } from 'uuid'
// import { Container } from './styles';
const kanbanItems = [
  {id: "001", content: "Conteúdo 1"},
  {id: "002", content: "Conteúdo 2"},
  {id: "003", content: "Conteúdo 3"},
]

const kanbanColumns = [
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



export function KanbanApp() {
  const [columns, setColumns] = useState(kanbanColumns)

  const onDragEnd = (result) => {

    let sourceColumnItems = []
    let destinationColumnItems = []
    let draggedItem = {}
    let sourceColumnId = 0
    let destinationColumnId = 0

    for (let i in columns) {
      if(columns[i].id == result.source.droppableId) {
        sourceColumnItems = columns[i].items
        sourceColumnId = i
      } else if(columns[i].id == result.destination.droppableId) {
        destinationColumnItems = columns[i].items
        destinationColumnId = i
      }
    }

    console.log(sourceColumnItems)
    console.log(destinationColumnItems)
  
    for(let i in sourceColumnItems) {
      if(sourceColumnItems[i].id == result.draggableId) {
        draggedItem = sourceColumnItems[i]
      }
    }
    // Excluí objeto arastado.
    let filteredSourceColumnItems = sourceColumnItems.filter((item) => item.id !== result.draggableId)
    
    // Adicionar o objeto arrastado para a nova posição
    if(result.source.droppableId == result.destination.droppableId) {
      filteredSourceColumnItems.splice(result.destination.index, 0, draggedItem)
      // Mudar o state
      let columnsCopy = JSON.parse(JSON.stringify(columns))
      columnsCopy[sourceColumnId].items = filteredSourceColumnItems
      setColumns(columnsCopy)
    } else {
      destinationColumnItems.splice(result.destination.index, 0, draggedItem)
      // Mudar o state
      let columnsCopy = JSON.parse(JSON.stringify(columns))
      columnsCopy[sourceColumnId].items = filteredSourceColumnItems
      columnsCopy[destinationColumnId].items = destinationColumnItems
      setColumns(columnsCopy)
    }

  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <DragDropContext onDragEnd={onDragEnd}>
        {columns.map((column) => (
          <div key={column.id} style={{ display: "flex", flexDirection:"column", alignItems:"center"}}>
            <h1>{column.name}</h1>
            <Droppable droppableId={column.id} key={column.id}>
              {(provided) => (
                <div 
                  ref={provided.innerRef} 
                  style={{ backgroundColor: "lightblue", width: 250, height: 500, padding: 5, margin: 10 }}
                >
                  {column.items.map((item, index) => (
                    <Draggable draggableId={item.id} index={index} key={item.id}>
                      {(provided) => (
                        <div 
                          {...provided.dragHandleProps}
                          {...provided.draggableProps}
                          ref={provided.innerRef} 
                          style={{background: 'gray', height: '3.5rem', margin: 5, display: 'flex', alignItems: 'center', justifyContent: 'center', ...provided.draggableProps.style }}
                        > 
                          {item.content} 
                        </div>
                        )}
                    </Draggable>
                  ))}
                {provided.placeholder}
              </div>
              )}
            </Droppable>
          </div>  
        ))}
      </DragDropContext>
    </div>
  )
}

