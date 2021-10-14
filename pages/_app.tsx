import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import Layout from '../components/Layout';
import '../styles/global.css';

const theme = {
  color: {
    primary: '#34b3a0',
  },
  vp: {
    sm: '768px',
    md: '1024px',
    lg: '1920px',
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
