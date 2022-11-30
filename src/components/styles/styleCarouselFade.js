import styled from "styled-components";

export const Container = styled.div`
    .d-block{
        max-height: 500px;
    }
    img{
        object-fit: cover;
        
    }

    h3{
        font-size: clamp(.8rem, 2vw, 3.5rem);
    }
    p{
        font-size: clamp(.6rem, 1.5vw, 2.5rem);
    }


`