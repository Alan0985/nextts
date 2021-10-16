import styled from 'styled-components';
const Banner = './assets/images/BannerBG.jpg';

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
  background: url(${Banner}) center center;

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
