import Image from 'next/image';
import { StyledCityCard } from './CityCard.style';

type Props = {
  key: number;
  src: any;
  name: string;
  distance: string;
};

export const CityCard = ({ src, name, distance }: Props) => (
  <StyledCityCard>
    <img src={src} alt={name} />
    <div>
      <h3>{name}</h3>
      <p>{distance}</p>
    </div>
  </StyledCityCard>
);
