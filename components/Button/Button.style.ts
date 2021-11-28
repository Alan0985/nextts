import styled from 'styled-components';

type Props = {
  theme: any;
};

export const StyledButton = styled.a`
  font-size: 16px;
  padding: 15px 60px;
  background-color: ${ ( { theme }: Props ) => theme.color.primary };
  color: #fff;

  &:hover {
    opacity: 0.9;
  }
`;
