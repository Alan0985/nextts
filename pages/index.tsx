import type { NextPage } from 'next';
import { FullScreenVideo } from '../components/FullScreenVideo/FullScreenVideo';
import { Nearby } from '../components/Nearby/Nearby';

const Home: NextPage = () => (
  <>
    <FullScreenVideo />
    <Nearby />
  </>
);

export default Home;
