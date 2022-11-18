import styled, { css, keyframes } from "styled-components";
import theme from "../../theme/theme";

export const loadingSpin = keyframes`
	0% {
		transform: rotate(0);
	}
	25% {
		transform: rotate(90deg);
	}
	50% {
		transform: rotate(180deg);
	}
	75% {
		transform: rotate(270deg);
	}
	100% {
		transform: rotate(360deg);
	}
    `;

export default styled.button`
  ${({ textColor, backgroundColor, borderColor, loading }) =>
    css`
      width: 85%;
      border-radius: 5px;
      outline: none;
      padding: 10px;
      border: 1px solid ${theme.colors.marca.black};
      transition: opacity 0.3s ease;
      font-size: 1rem;
      font-weight: 500;
      color: ${textColor !== "" ? textColor : theme.colors.marca.white};
      background-color: ${backgroundColor !== "" ? backgroundColor : theme.colors.marca.brown};
      border-color: ${borderColor !== "" ? borderColor : theme.colors.marca.brown};

      :disabled {
        cursor: default !important;
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
