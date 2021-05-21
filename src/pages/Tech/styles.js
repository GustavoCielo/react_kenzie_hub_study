import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
  h1 {
    margin-bottom: 1rem;
    background: var(--blue);
    width: 100%;
    color: white;
  }

  input {
    border: 2px solid var(--blue);
    border-radius: 10px;
    width: 200px;
    height: 2rem;
    padding: 5px;
    margin-right: 0.5rem;
  }

  select {
    border: 2px solid var(--blue);
    border-radius: 10px;
    width: 200px;
    height: 2rem;
    padding: 5px;
  }

  button.styledButton {
    border: 2px solid var(--blue);
    background: var(--gray);
    color: white;
    border-radius: 10px;
    width: 200px;
    height: 2rem;
    padding: 5px;
    margin-right: 0.5rem;
    margin-left: 5px;
  }

  button.logout {
    position: absolute;
    top: 10px;
    right: 10px;
    color: white;
    background: var(--blue);
    border: none;
  }
`;
