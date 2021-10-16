import styled from 'styled-components';

interface Props {
  theme: any;
}

export const StyledContact = styled.section`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 150px auto;

  @media (max-width: ${({ theme }: Props) => theme.vp.sm}) {
    flex-direction: column;
    margin: 100px auto;
  }

  div {
    width: 400px;
    max-width: 80vw;
    text-align: center;
  }

  form {
    width: 400px;
    max-width: 80vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  input {
    width: 90%;
    height: 36px;
    line-height: 36px;
    border: 1px solid ${({ theme }: Props) => theme.color.primary};
    color: #2c3e50;
    text-align: center;
    margin-top: 6px;
  }

  textarea {
    width: 90%;
    height: 100px;
    border: 1px solid ${({ theme }: Props) => theme.color.primary};
    color: #2c3e50;
    text-align: center;
    margin: 6px auto;
  }
`;
