import styled from 'styled-components';

interface Props {
  theme: any;
}

export const StyledFlex = styled.div`
  display: flex;
  align-items: center;

  & > div,
  & > ul {
    flex: 1;
  }

  @media (max-width: ${({ theme }: Props) => theme.vp.sm}) {
    flex-direction: column;
    text-align: center;
  }
`;
