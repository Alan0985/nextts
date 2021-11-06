import type { NextPage } from 'next';

import { FullScreenVideo } from '../components/FullScreenVideo/FullScreenVideo';
import { Nearby } from '../components/Nearby/Nearby';
import { DiscoverBanner } from '../components/DiscoverBanner/DiscoverBanner';

const Home: NextPage = () => (
  <>
    <FullScreenVideo />
    <Nearby />
    <DiscoverBanner />
  </>
);

export default Home;
