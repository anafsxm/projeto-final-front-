import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h4 {
    margin-bottom: 15px;
  }
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 0 0 0;
    width: 85%;
  }
  > div:last-child {
    padding: 10px 0 0 0;
  }
  button {
    margin: 1.25rem 0;
    width: 50%;
  }
`;
