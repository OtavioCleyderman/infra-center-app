import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

// import { Container } from './styles';
const kanbanItems = [
  {id: "001", content: "Conteúdo 1"},
  {id: "002", content: "Conteúdo 2"},
  {id: "003", content: "Conteúdo 3"},
]

const kanbanColumns = [
  {
    name: "To do",
    id: "123",
    items: kanbanItems,
  }, 
  {
    name: "Doing",
    id: "456",
    items: [],
  }
]



export function KanbanApp() {
  const [columns, setColumns] = useState(kanbanColumns)

  const onDragEnd = (result) => {
    console.log(result)
    var sourceColumnItems = columns[0].items
    var draggedItem = {}
  
    for(var i in sourceColumnItems) {
      if(sourceColumnItems[i].id == result.draggableId) {
        draggedItem = sourceColumnItems[i]
      }
    }
    // Excluí objeto arastado.
    var filteredSourceColumnItems = sourceColumnItems.filter((item) => item.id !== result.draggableId)
    
    // Adicionar o objeto arrastado para a nova posição
    filteredSourceColumnItems.splice(result.destination.index, 0, draggedItem)
    console.log(filteredSourceColumnItems)
    console.log(draggedItem)
  
    // Mudar o state
    // columns[0].items = filteredSourceColumnItems
    var columnsCopy = JSON.parse(JSON.stringify(columns))
    columnsCopy[0].items = filteredSourceColumnItems
    setColumns(columnsCopy)
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

