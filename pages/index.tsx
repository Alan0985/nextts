import type { NextPage } from 'next';

import { FullScreenVideo } from '../components/FullScreenVideo/FullScreenVideo';
import { Nearby } from '../components/Nearby/Nearby';
import { Banner } from '../components/Banner/Banner';

const Home: NextPage = () => (
  <>
    <FullScreenVideo />
    <Nearby />
    <Banner />
  </>
);

export default Home;
