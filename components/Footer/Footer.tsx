import Link from 'next/link';

import { StyledContainer } from '../Utils/Container.style';
import { StyledFlex } from '../Utils/Flex.style';
import { StyledFooter } from './Footer.style';
import { SocialIcons } from '../SocialIcons/SocialIcons';

export const Footer: React.FC = () => {
  let fullYear = new Date().getFullYear();

  return (
    <StyledFooter>
      <StyledContainer>
      <StyledFlex>
        <ul>
          <li>Lorem ipsum dolor sit amet</li>
          <li>021-543-123-4567</li>
          <li>example@helloholiday.com</li>
        </ul>

        <ul>
          <li>
            <Link href='/about'>About Us</Link>
          </li>
          <li>
            <Link href='#'>What We Do</Link>
          </li>
          <li>
            <Link href='#'>FAQ</Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link href='#'>Career</Link>
          </li>
          <li>
            <Link href='#'>Blog</Link>
          </li>
          <li>
            <Link href='/contact'>Contact Us</Link>
          </li>
        </ul>

        <SocialIcons />
      </StyledFlex>
      <p>&copy; {fullYear} HelloHoliday. All Rights Reserved.</p>
      </StyledContainer>
    </StyledFooter>
  )
}
