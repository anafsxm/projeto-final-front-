import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  justify-content: center;
`;

export const Form = styled.form`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 1.25rem;
  border-radius: 20px;
  width: 340px;
  h4 {
    margin-bottom: 15px;
  }
  div {
    margin: 10px 0;
  }
  button {
    margin: 5px 0 15px 0;
  }
`;
