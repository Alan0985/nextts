import Link from 'next/link';

import { StyledGuideCard } from './GuideCard.style';

type Props = {
  key: number;
  src: any;
  name: string;
  href: string;
};
export const GuideCard = ({ src, name, href }: Props) => (
  <Link href={href} legacyBehavior>
    <StyledGuideCard>
      <img src={src} alt={name} />
      <div></div>
      <span>
        <h3>{name}</h3>
      </span>
    </StyledGuideCard>
  </Link>
);
