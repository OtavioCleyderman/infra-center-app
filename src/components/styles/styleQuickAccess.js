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


    @media (min-width: 1500px) {

    .container{
        margin: 0;
    }    
    h2 { 
        font-size: clamp(1.3rem, 2vw, 2.5rem);
        margin-bottom: 3rem;
    }

    .col {
        text-align: center;
        .icons-link{
            width: clamp(2rem, 4vw, 5rem);
        }
        h5 {
            /* font-size: clamp(.8rem, 1.5vw, 2rem);  */
            font-size: clamp(.8rem, .9vw, 2rem);
        }
    }


    }



`