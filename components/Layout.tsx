import React from 'react';
import { Footer } from './Footer/Footer';
import { Navbar } from './Navbar/Navbar';

type Props = {
  children: any;
};

const Layout = ({ children }: Props) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

export default Layout;
