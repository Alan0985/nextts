import { StyledVideoText } from './VideoText.style';
import { Button } from '../../Button/Button';

export const VideoText = () => (
  <StyledVideoText>
    <h1>Enjoy Summer Holidays</h1>
    <p>
      Summer is the time of year people get out of the house and bask outside
      with friends and family. And the holidays are a great time to enjoy
      experiences and make memories with family, friends and loved ones.
    </p>
    <Button href='/guides'>Explore</Button>
  </StyledVideoText>
);
