import styled, { css } from "styled-components";
import theme from "../../theme/theme";

export default styled("h1").attrs(({ type }) => ({
  as: type,
}))`
  ${({ align, color, fontSize, fontWeight, margin, padding }) =>
    css`
      text-align: ${align};
      color: ${color};
      margin: ${margin};
      padding: ${padding};
      font-size: ${fontSize !== "" && fontSize};
      font-weight: ${fontWeight !== "" && fontWeight};

      > a {
        text-decoration: none;
        font-weight: 700;
        color: ${theme.colors.marca.blue};
      }
    `}
`;
