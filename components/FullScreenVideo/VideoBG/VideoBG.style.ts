import styled from 'styled-components';

export const StyledVideoBG = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  video {
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100vw;
    height: auto;

    /*Auto stretch the video size if the viewport size is bigger than the video size*/
    min-width: 100%;
    min-height: 100%;
  }

  @media screen and (max-width: 1024px) {
    video {
      /* For Portrait */
      width: auto;
      height: 100vh;

      transform: translate(-40%, -50%);
    }
  }
`;
