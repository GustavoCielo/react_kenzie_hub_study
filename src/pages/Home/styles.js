import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    background-color: #0079c1;
    text-align: center;
    color: #f5f5f5;
    width: 100%;
  }
  img {
    margin-top: 5rem;
    height: 300px;
    width: 300px;
    border: 1px solid #0079c1;
  }
  div {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 1rem;
  }
`;
