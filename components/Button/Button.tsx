import Link from 'next/link';
import { StyledButton } from './Button.style';

type Props = {
  href: string;
  children: any;
};

export const Button = ({ href, children }: Props) => (
  <Link href={href}>
    <StyledButton>{children}</StyledButton>
  </Link>
);
