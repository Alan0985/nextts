import styled from 'styled-components';

interface Props {
  theme: any;
}

export const StyledGuideCard = styled.a`
  width: 25vw;
  height: 25vw;
  position: relative;

  &:hover {
    div {
      opacity: 0.3;
    }

    h3 {
      opacity: 1;
    }
  }

  @media (max-width: ${({ theme }: Props) => theme.vp.sm}) {
    width: 50vw;
    height: 50vw;
  }
  @media (max-width: ${({ theme }: Props) => theme.vp.xs}) {
    width: 100vw;
    height: 100vw;
    margin: 2px 0;
  }

  img {
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
  }

  div {
    z-index: 1;
    position: absolute;
    background-color: ${({ theme }: Props) => theme.color.primary};
    opacity: 0;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transition: all 0.2s ease-in;
  }

  span {
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    h3 {
      color: #fff;
      opacity: 0;
      font-size: 30px;
      text-align: center;
      text-transform: uppercase;
      transition: all 0.2s ease-in;

      @media (max-width: ${({ theme }: Props) => theme.vp.sm}) {
        font-size: 16px;
      }
    }
  }
`;
