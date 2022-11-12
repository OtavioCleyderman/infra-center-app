import styled from "styled-components";

export const StyledContainer = styled.div`
    *{
        color: #FFFFFF;
        font-weight: 500;
    }
    *:hover{
        color: #0bbaff;
    }

    background-color: #0000FF;
    
    .navBar{
        margin: 0;
    }

    .navbar-toggler-icon{
        fill: #FFFFFF;
    }

    @media (min-width: 1500px) {
        .navBar{
            margin: auto;
        }
        .navBrand{
            font-size: clamp(1rem, 1vw, 3rem);
        }
        .navMenus{
            font-size: clamp(.8rem, .8vw, 2.5rem);
        }
    }
   
`