import { StyledGuideCard } from './GuideCard.style';

type Props = {
  key: number;
  src: any;
  name: string;
  href: string;
};
export const GuideCard = ({ src, name, href }: Props) => (
  <StyledGuideCard href={href}>
    <img src={src} alt={name} />
    <div></div>
    <span>
      <h3>{name}</h3>
    </span>
  </StyledGuideCard>
);
