import styled from "styled-components";

type Props = {
    theme: any
};

export const StyledTourText = styled.div`
width: 50%;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-between;
text-align: left;
margin: 40px 20px;

h1{
    font-size: 24px;
    margin: 10px 0;
}
div{
    display: flex;
    align-items: center;
}
span{
    font-weight: 600;
    margin-right: 5px;
}

svg{
    color:${ ( { theme }: Props ) => theme.color.primary }
}

@media (max-width: ${ ( { theme }: Props ) => theme.vp.sm }) {
    width: 100%;
    margin: 0;
    padding: 10px 20px;
    align-items: center;
    text-align: center;
    p {
      font-size: 16px;
    }
}
`