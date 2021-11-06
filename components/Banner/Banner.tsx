import { StyledBanner } from './Banner.style';
import { Button } from '../Button/Button';

type Props = {
  bannerTitle: string;
  bannerText: string;
  buttonHref: string;
  buttonText: string;
  bgImgUrl: any
};

export const Banner = ( { bannerTitle, bannerText, buttonHref, buttonText, bgImgUrl }: Props ) => (
  <StyledBanner bgImgUrl={bgImgUrl}>
    <h1>{bannerTitle}</h1>
    <p>
      {bannerText}
    </p>
    <Button href={buttonHref}>{buttonText}</Button>
  </StyledBanner>
);
