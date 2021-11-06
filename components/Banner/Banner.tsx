import { StyledBanner } from './Banner.style';
import { Button } from '../Button/Button';

type Props = {
  bannerTitle: string;
  bannerText: string;
  buttonHref: string;
  buttonText: string;
};

export const Banner = ( { bannerTitle, bannerText, buttonHref, buttonText }: Props ) => (
  <StyledBanner>
    <h1>{bannerTitle}</h1>
    <p>
      {bannerText}
    </p>
    <Button href={buttonHref}>{buttonText}</Button>
  </StyledBanner>
);
