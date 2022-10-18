import styled from "styled-components";

export const Container = styled.div`
  margin: 0 0 1rem 0;

  h2 { 
    font-size: clamp(1.3rem, 3vw, 4rem);
  }

  h2 span svg{
    width: clamp(1.5rem, 3.5vw, 4rem);
    height: clamp(1.5rem, 3.5vw, 4rem);
  }

  details p{
    margin: .5rem 0 .5rem 2rem;
    width: 40rem;
    font-size: clamp(.8rem, 1.5vw, 3.5rem);
  }
`

export const Span = styled.span`
  margin-left: .5rem;
`
export const Summary = styled.summary`
  font-size: clamp(1rem, 1.7vw, 4rem);
  text-decoration: underline;


`
