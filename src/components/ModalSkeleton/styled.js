import styled from "styled-components";
import theme from "../../theme/theme";

export const DarkMask = styled.div`
  display: ${({ modalState }) => (modalState === "true" ? "block" : "none")};
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  height: 100%;
  width: 100%;
  transition: display 0.8s ease;
`;
export const ModalBody = styled.main`
  background-color: ${theme.colors.marca.white};
  position: absolute;
  z-index: 10;
  display: block;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  min-width: 85%;
  max-width: 31.25rem;
  min-height: 3.125rem;
  max-height: 31.25rem;
  border: 2px solid ${theme.colors.marca.black};
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.9);
`;

const mapType = {
  submit: "form",
  click: "div",
};

export const ModalWrapper = styled("div").attrs(({ actionType }) => ({
  as: mapType[actionType],
}))`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const Header = styled.header`
  border-bottom: 2px solid ${theme.colors.marca.black};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;

  svg {
    margin-top: -3%;
    margin-right: -2%;
    transition: opacity 0.8s ease;
    :hover {
      cursor: pointer;
      opacity: 0.7;
      fill: ${theme.colors.marca.red};
    }
  }
`;

export const Body = styled.div`
  padding: 15px;
`;

export const Footer = styled.footer`
  display: block;
  bottom: 0;
  right: 0;
  border-top: 2px solid ${theme.colors.marca.black};
  padding: 15px 10px 10px 15px;

  > div {
    display: flex;
    align-items: flex-end;
    justify-content: end;
    bottom: 0;

    > button {
      width: 200px;
      margin: 0 5px;
    }
  }
`;
