import { StyledContainer } from '../Utils/Container.style';
import { StyledFlex } from '../Utils/Flex.style';
import { StyledFooter } from './Footer.style';
import { SocialIcons } from '../SocialIcons/SocialIcons';

export const Footer: React.FC = () => (
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
            <a href='/about'>About Us</a>
          </li>
          <li>
            <a href='#'>What We Do</a>
          </li>
          <li>
            <a href='#'>FAQ</a>
          </li>
        </ul>

        <ul>
          <li>
            <a href='#'>Career</a>
          </li>
          <li>
            <a href='#'>Blog</a>
          </li>
          <li>
            <a href='/contact'>Contact Us</a>
          </li>
        </ul>

        <SocialIcons />
      </StyledFlex>
      <p>&copy;2021 HelloHoliday. All Rights Reserved.</p>
    </StyledContainer>
  </StyledFooter>
);
