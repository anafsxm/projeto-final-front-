import styled, { css } from "styled-components";
import theme from "../../theme/theme";

export const InputGroup = styled.div`
  position: relative;
  margin: 5px;
`;

export const Label = styled.label`
  position: absolute;
  left: 16px;
  color: ${theme.colors.marca.black};
  pointer-events: none;
  transform: translateY(1rem);
  color: ${theme.colors.marca.brown};

  :focus {
    outline: none;
    border: 1.5px solid ${theme.colors.marca.brown};
  }
`;

const inputFocusAnimation = css`
  transform: translateY(-50%) scale(0.8);
  background-color: ${theme.colors.marca.white};
  padding: 0 0.2em;
  color: ${theme.colors.marca.brown};
`;

const labelAnimation = (keepFocus, type) => {
  if (!!keepFocus || type === "date" || type === "time") {
    return css`
      ~ ${Label} {
        border-color: red;
        ${inputFocusAnimation}
        color: ${theme.colors.marca.brown};
      }
    `;
  }
  return css``;
};

export const Input = styled.input`
  border: solid 1.5px ${theme.colors.marca.brown};
  border-radius: 1rem;
  background: none;
  padding: 1rem;
  font-size: 1rem;
  color: ${theme.colors.marca.black};
  transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);

  :focus {
    outline: none;
    border: 1.5px solid ${theme.colors.marca.brown};
  }

  :focus ~ ${Label} {
    ${inputFocusAnimation}
  }
  ${({ keepFocus, type }) =>
    css`
      ${labelAnimation(keepFocus, type)}
    `}
`;

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  > input {
    margin: 0;
  }
`;
