import type { NextPage } from 'next';
import { StyledTouring } from '../components/Touring/Touring.style';
import { TouringBanner } from '../components/Touring/TouringBanner/TouringBanner';

const Touring: NextPage = () => (
  <StyledTouring>
    <TouringBanner />
  </StyledTouring>
);

export default Touring;
