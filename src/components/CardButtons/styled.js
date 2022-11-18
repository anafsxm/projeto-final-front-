import styled from "styled-components";
import theme from "../../theme/theme";

export default styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${theme.colors.marca.black};
  width: 100px;
  height: 100px;
  border-radius: 10px;
  padding: 10px;
  transition: opacity 0.7s ease;
  margin: 15px;

  p {
    text-align: center;
    color: ${theme.colors.marca.white};
    transition: color 0.7s ease;
    margin: 5px 0;
  }

  svg {
    fill: ${theme.colors.marca.white};
    width: 2.188rem;
    height: 2.188rem;
    margin: 0;
    padding: 0;
    transition: fill 0.7s ease;
  }

  :hover {
    cursor: pointer;
    opacity: 0.8;
    p {
      color: ${theme.colors.marca.brown};
    }
    svg {
      fill: ${theme.colors.marca.brown};
    }
  }
`;
