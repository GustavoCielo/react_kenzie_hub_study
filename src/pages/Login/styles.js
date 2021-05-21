import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  input {
    width: 250px;
    margin: 5px 0;
    height: 24px;
  }
  button {
    background: var(--blue);
    color: var(--white);
    height: 32px;
    width: 250px;
    border: none;
    border-radius: 10px;
  }
  span {
    color: var(--red);
  }
`;
