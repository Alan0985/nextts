import { StyledBanner } from './Banner.style';
import { StyledButton } from '../Button/Button.style';

export const Banner = () => (
  <StyledBanner>
    <h1>Discover Valuable Tourings</h1>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus tenetur
      totam suscipit labore nam quibusdam repellendus ipsam error iusto est?
    </p>
    <StyledButton href='/touring'>Discover</StyledButton>
  </StyledBanner>
);
