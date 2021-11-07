import type { NextPage } from 'next';
import { StyledTouring } from '../components/Touring/Touring.style';
import { TouringBanner } from '../components/Touring/TouringBanner/TouringBanner';
import { TourCard } from '../components/Touring/TourCard/TourCard';

import { TourCardData } from '../data'

const Touring: NextPage = () => (
  <StyledTouring>
    <TouringBanner />
    <section id="tours">
      {TourCardData.map( ( tour ) => (
        <TourCard
          key={tour.id}
          href={tour.href}
          src={tour.src}
          title={tour.title}
          description={tour.description}
          duration={tour.duration}
          starCount={tour.starCount}
          halfStar={tour.halfStar}
        />
      ) )}
    </section>
  </StyledTouring>
);

export default Touring;
