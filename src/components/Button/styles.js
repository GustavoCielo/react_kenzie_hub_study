import styled from "styled-components";

export const Container = styled.button`
  background: ${(props) => (props.whiteSchema ? "#2b3942" : "#f5f5f5")};
  color: ${(props) => (props.whiteSchema ? "#f5f5f5" : "#2b3942")};
  height: 45px;
  border-radius: 8px;
  transition: 0.2s;
  border: none;
  outline: none;
  font-size: 1rem;
  margin-top: 3rem;
  margin-left: 5px;
  :hover {
    filter: brightness(0.75);
    border: 2px solid #1b7ced;
    cursor: pointer;
  }
  width: 15%;
`;
