import React, { useState } from 'react';
import { NavLinks } from './NavLinks/NavLinks';

import { FaUmbrellaBeach } from 'react-icons/fa';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'

import { StyledNavbar } from './Navbar.style';

export const Navbar: React.FC = () =>
{
  const [toggleMenu, setToggleMenu] = useState( false )

  return (
    <StyledNavbar>
      <div>
        <FaUmbrellaBeach />
        <h1>Hello Holiday</h1>
      </div>

      <NavLinks />

      {/* <div className="navbar_menu">
        {
          toggleMenu ?
            <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu( false )} />
            :
            <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu( true )} />
        }
        {toggleMenu && <NavLinks />}
      </div> */}
    </StyledNavbar>
  );
};
