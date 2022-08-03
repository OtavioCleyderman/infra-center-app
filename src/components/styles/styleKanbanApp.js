import styled from "styled-components";


export const DivScroll = styled.div`
  overflow-x: scroll;
  overflow-y: scroll;
  display: flex;
`
export const ContainerTasks = styled.div`
  &:nth-child(1) > div:nth-child(2) {
    visibility: visible; 
  }
  &:nth-child(2) > div:nth-child(2) {
    visibility: hidden; 
  }
  &:nth-child(3) > div:nth-child(2) {
    visibility: hidden; 
  }

`

