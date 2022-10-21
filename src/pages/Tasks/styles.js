import styled from "styled-components";

export const Container = styled.div`
  h1 {
    font-size: clamp(2rem, 3.5vw, 3rem);
  }
  h2 {
    font-size: clamp(1.7rem, 2.5vw, 2rem);
  }
  span {
    font-size: clamp(.8rem, 1.4vw, 1.5rem);
  }


`
export const DivScroll = styled.div`

  @media (min-width: 822px) {
    overflow-x: hidden;
    overflow-y: hidden;
    justify-content: center;
  }
  
  margin: .5rem;
  overflow-x: scroll;
  overflow-y: scroll;
  display: flex;
`