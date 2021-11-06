import styled from 'styled-components';

type Props = {
  bgImgUrl: string,
  theme: any
};

export const StyledBanner = styled.section`
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  color: #fff;
  margin: auto;
  padding: 0 3rem;
  background: ${ ( { bgImgUrl }: Props ) => `url(${ bgImgUrl }) center center` };
  background-size: cover;

  h1 {
    font-size: 40px;
    text-align: center;
  }

  p {
    font-size: 1.5rem;
    display: block;
    padding-bottom: 2rem;
  }
`;
