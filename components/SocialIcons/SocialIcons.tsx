import Link from 'next/link';

import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { StyledSocialIcons } from './SocialIcons.style';

export const SocialIcons: React.FC = () => {
  return (
    <StyledSocialIcons>
      <li>
        <Link href='https://twitter.com'>

          <FaTwitter />

        </Link>
      </li>

      <li>
        <Link href='https://facebook.com'>

          <FaFacebook />

        </Link>
      </li>

      <li>
        <Link href='https://linkedin.com'>

          <FaLinkedin />

        </Link>
      </li>
    </StyledSocialIcons>
  );
};
