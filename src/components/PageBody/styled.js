import { ImArrowLeft, ImExit } from "react-icons/im";

import styled, { css } from "styled-components";
import theme from "../../theme/theme";

export const Main = styled.main`
  position: fixed;
  background: ${theme.colors.marca.white};
  height: 100vh;
  width: 70vw;
  display: block;
  margin: 0 auto;
  left: 0;
  right: 0;
  padding: 0 1.25rem;
  overflow: auto;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 1rem;
  padding: 20px 0;
  > img {
    width: 150px;
  }
`;

const GenericSvgHover = css`
  cursor: pointer;
  transition: opacity 0.7s ease;
  fill: ${theme.colors.marca.black};
  :hover {
    fill: ${theme.colors.marca.red};
    opacity: 0.7;
    cursor: pointer;
  }
`;

export const ReturnIcon = styled(ImArrowLeft)`
  ${GenericSvgHover}
  ${({ hiddenback }) =>
    hiddenback === "true" &&
    css`
      visibility: hidden;
      user-select: none;
    `}
`;
export const LogoutIcon = styled(ImExit)`
  ${GenericSvgHover}
`;

export const PageTitle = styled.div`
  margin: 3.75rem 0;

  h1 {
    text-align: center;
    color: ${theme.colors.marca.blue};
    margin-bottom: 0;
    padding-bottom: 0;
  }
  > div {
    width: 100%;
    border: 3px solid ${theme.colors.marca.brown};
    border-radius: 5px;
  }
`;
