import { CityCard } from './CityCard/CityCard';
import { cities } from '../../data';
import { StyledNearby } from './Nearby.style';

export const Nearby = () => (
  <StyledNearby>
    <div>
      <h1>Explore Nearby</h1>
    </div>

    <section>
      {cities.map((city) => (
        <CityCard
          key={city.id}
          src={city.src}
          name={city.name}
          distance={city.distance}
        />
      ))}
    </section>
  </StyledNearby>
);
