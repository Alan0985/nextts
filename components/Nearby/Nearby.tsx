import { StyledFlex } from '../Utils/Flex.style';
import { CityCard } from './CityCard/CityCard';
import { cities } from '../../data';

export const Nearby = () => (
  <>
    <div>
      <h1>Explore Nearby</h1>
    </div>

    <StyledFlex>
      {cities.map((city) => (
        <CityCard
          key={city.id}
          src={city.src}
          name={city.name}
          distance={city.distance}
        />
      ))}
    </StyledFlex>
  </>
);
