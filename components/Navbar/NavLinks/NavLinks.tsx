import { useRouter } from 'next/router';
import Link from 'next/link';

import { StyledNavLinks } from './NavLinks.style';

export const NavLinks = () =>
{
    const { pathname } = useRouter();

    return (
        <StyledNavLinks>
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
        </StyledNavLinks>
    )
}