import styled from "styled-components";
import { loadingSpin } from "../Button/styled";

export const LoadingWrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  svg {
    animation: ${loadingSpin} 1.5s linear infinite;
  }
`;
