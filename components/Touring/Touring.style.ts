import styled from 'styled-components';

type Props = {
  theme: any
};

export const StyledTouring = styled.section`
  height: 100%;
  text-align: center;

    
  @media (max-width: ${ ( { theme }: Props ) => theme.vp.sm }) {
    h1{
      font-size: 36px;
      margin: 10px auto;

    }
    p {
      font-size: 20px;
      margin: 0
    }
  }
`;
