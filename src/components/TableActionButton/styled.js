import styled, { css, keyframes } from "styled-components";
import theme from "../../theme/theme";

const loadingSpin = keyframes`
	0% {
		transform: rotate(0);
	}
	100% {
		transform: rotate(360deg);
	}
    `;

export default styled.button`
  ${({ backgroundColor, borderColor, loading }) =>
    css`
      width: 1.875rem;
      height: 1.875rem;
      border-radius: 3px;
      outline: none;
      padding: 5px;
      margin: 5px;
      border: 1px solid ${backgroundColor};
      transition: opacity 0.3s ease;
      background-color: ${backgroundColor !== "" ? backgroundColor : theme.colors.marca.brown};
      border-color: ${borderColor !== "" ? borderColor : theme.colors.marca.brown};
      svg {
        width: 1.25rem;
        height: 1.25rem;
        fill: ${theme.colors.marca.white};
      }
      :disabled {
        cursor: default !important;
        opacity: 0.5 !important;
        user-select: none;
        ${loading === "true"
          ? css`
              svg {
                animation: ${loadingSpin} 1.5s linear infinite;
              }
            `
          : css`
              opacity: 0.8;
            `}
      }

      :hover {
        cursor: pointer;
        opacity: 0.7;
      }
    `}
`;
