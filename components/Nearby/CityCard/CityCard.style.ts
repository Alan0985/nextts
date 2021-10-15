import styled from 'styled-components';

interface Props {
  theme: any;
}

export const StyledCityCard = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  margin: 40px 10px;
  min-width: 300px;

  @media (max-width: ${({ theme }: Props) => theme.vp.sm}) {
    margin: 10px;
  }

  img {
    width: 100px;
    height: 100px;
    min-width: 100px;
    min-height: 100px;
    border-radius: 10px;
    margin-right: 10px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h3,
  p {
    margin: 5px 0;
  }
`;
