import styled from "styled-components";

type Props = {
    theme: any
};

export const StyledTourCard = styled.section`
width: 80vw;
display: flex;
justify-content: center;
align-items: center;
border-bottom: 1px solid #ccc;

&:nth-child(even){
      flex-direction: row-reverse;
    }


@media (max-width: ${ ( { theme }: Props ) => theme.vp.sm }) {
width: 100vw;
flex-direction: column;

&:nth-child(even){
      flex-direction: column;
    }
  }
`