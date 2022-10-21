import styled from "styled-components";


export const DivScroll = styled.div`
  overflow-x: scroll;
  overflow-y: scroll;
  display: flex;
`
export const ContainerTasks = styled.div`
  
  .card-task{
    background: #0000fa; 
    color: white;
    border-radius: 5px;
    font-weight: 600;
    height: 3.5rem; 
    margin: 5px; 
    padding: 8px;
    display: flex; 
    align-items: center; 
    justify-content: center;
  }

.spanIcons{
  display: flex;
  align-items: center;
  gap: 4px;
}

.addTask,
.deleteTasksDone{
  cursor: pointer;
}


  &:nth-child(1) > div:nth-child(3) {
    display: none;
  }

  &:nth-child(2) > div:nth-child(2) {
    visibility: hidden;
  }

  &:nth-child(2) > div:nth-child(3) {
    display: none;
  }

  &:nth-child(3) > div:nth-child(2) {
    display: none;
  }




`

