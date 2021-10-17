import Link from 'next/link';

import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { StyledSocialIcons } from './SocialIcons.style';

export const SocialIcons: React.FC = () => {
  return (
    <StyledSocialIcons>
      <li>
        <Link href='https://twitter.com'>
          <a>
            <FaTwitter />
          </a>
        </Link>
      </li>

      <li>
        <Link href='https://facebook.com'>
          <a>
            <FaFacebook />
          </a>
        </Link>
      </li>

      <li>
        <Link href='https://linkedin.com'>
          <a>
            <FaLinkedin />
          </a>
        </Link>
      </li>
    </StyledSocialIcons>
  );
};
