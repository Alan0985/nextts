import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import Layout from '../components/Layout';
import '../styles/global.css';

const theme = {
  color: {
    primary: '#34b3a0',
  },
  vp: {
    xs: '375px',
    sm: '768px',
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
export default MyApp;
