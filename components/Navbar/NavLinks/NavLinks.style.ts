import styled from 'styled-components';

interface Props
{
    theme: any;
}

export const StyledNavLinks = styled.ul`
    display: flex;
    height: 100%;

    li {
    margin: 0 10px;
    &.active {
      border-top: 4px solid #fff;
      border-bottom: 4px solid #fff;
    }
    &:hover {
      border-top: 4px solid #fff;
      border-bottom: 4px solid #fff;
    }
  }

  a {
    display: inline-flex;
    align-items: center;
    height: 100%;
    color: #fff;
  }
`