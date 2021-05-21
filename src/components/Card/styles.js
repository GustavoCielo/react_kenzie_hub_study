import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid var(--gray);
  width: 140px;
  height: 60px;
  position: relative;
  padding: 0.25rem;
  margin-bottom: 1rem;
  background: var(--blue);
  color: white;
  button {
    position: absolute;
    top: 2px;
    right: 2px;
    background: none;
    border: none;
    color: var(--red);
  }

  h3 {
    margin-bottom: 5px;
  }
`;

