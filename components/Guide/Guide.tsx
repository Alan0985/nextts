import { StyledGuide } from './Guide.style';
import { guides } from '../../data';
import { GuideCard } from './GuideCard/GuideCard';

export const Guide = () => (
  <StyledGuide>
    <h1>Travel Guides</h1>
    <section>
      {guides.map((guide) => (
        <GuideCard key={guide.id} src={guide.src} name={guide.name} href='#' />
      ))}
    </section>
  </StyledGuide>
);
