import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { FaUmbrellaBeach } from 'react-icons/fa';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'

import { StyledNavbar } from './Navbar.style';

export const Navbar: React.FC = () =>
{
  const { pathname } = useRouter();
  const [toggleMenu, setToggleMenu] = useState( false )

  const NavLinks = () => (
    <ul>
      <li className={pathname == '/' ? 'active' : ''}>
        <Link href='/'>Home</Link>
      </li>
      <li className={pathname == '/about' ? 'active' : ''} data-test="about">
        <Link href='/about'>About</Link>
      </li>
      <li className={pathname == '/guides' ? 'active' : ''}>
        <Link href='/guides'>Travel Guides</Link>
      </li>
      <li className={pathname == '/touring' ? 'active' : ''}>
        <Link href='/touring'>Touring</Link>
      </li>
      <li className={pathname == '/contact' ? 'active' : ''} data-test="contact">
        <Link href='/contact'>Contact</Link>
      </li>
    </ul>
  )

  return (
    <StyledNavbar>
      <div>
        <FaUmbrellaBeach />
        <h1>Hello Holiday</h1>
      </div>

      <NavLinks />

      <div className="navbar_menu">
        {
          toggleMenu ?
            <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu( false )} />
            :
            <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu( true )} />
        }
        {toggleMenu && <NavLinks />}
      </div>
    </StyledNavbar>
  );
};
