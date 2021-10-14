import styled from 'styled-components';

import { VideoBG } from './VideoBG/VideoBG';
import { VideoOverlay } from './VideoOverlay/VideoOverlay';
import { VideoText } from './VideoText/VideoText';

const StyledFullScreenVideo = styled.section`
  height: 100vh;
  display: flex;
  margin: auto;
  text-align: center;
  align-items: center;
  color: #fff;
  padding-left: 3rem;
  padding-right: 3rem;
`;

export const FullScreenVideo = () => (
  <StyledFullScreenVideo>
    <VideoBG />
    <VideoOverlay />
    <VideoText />
  </StyledFullScreenVideo>
);
