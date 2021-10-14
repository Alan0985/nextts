import styled from 'styled-components';
interface Props {
  theme: any;
}

export const StyledVideoText = styled.div`
  z-index: 2;

  h1 {
    font-size: 50px;
  }

  p {
    font-size: 1.5rem;
    display: block;
    padding-bottom: 2rem;
  }

  /* a {
    background: ${({ theme }: Props) => theme.color.primary};
    color: #fff;
    font-size: 1.2rem;
    padding: 1rem 2rem;
  } */
`;
