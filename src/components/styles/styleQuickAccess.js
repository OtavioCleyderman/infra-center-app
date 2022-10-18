import styled from "styled-components"

export const Container = styled.div`
    h2 { 
        font-size: clamp(1.3rem, 3vw, 4rem);
        margin-bottom: 3rem;
    }

    .col {
        text-align: center;
        .icons-link{
            width: clamp(3rem, 7vw, 6rem);
        }
        h5 {
            font-size: clamp(1rem, 2vw, 3rem); 
        }
    }



`