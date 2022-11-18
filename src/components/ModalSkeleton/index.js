import PropTypes from "prop-types";
import { BiX as CloseIcon } from "react-icons/bi";
import theme from "../../theme/theme";
import Button from "../Button";
import Typography from "../Typography";
import { Body, Footer, Header, ModalBody, DarkMask, ModalWrapper } from "./styled";

function ModalSkeleton({
  modalState,
  onClose,
  actionType,
  title,
  children,
  clickLoading,
  buttonAction,
  onSubmit,
  buttonType,
}) {
  const mapButtonsTypeClick = {
    default: (
      <>
        <Button
          backgroundColor={theme.colors.buttons.cancel}
          borderColor={theme.colors.buttons.cancel}
          loading={clickLoading}
          onClick={buttonAction}
        >
          Confirmar
        </Button>
        <Button
          backgroundColor={theme.colors.buttons.warning}
          borderColor={theme.colors.buttons.warning}
          onClick={onClose}
        >
          Cancelar
        </Button>
      </>
    ),
    confirm: (
      <>
        <Button
          backgroundColor={theme.colors.buttons.confirm}
          borderColor={theme.colors.buttons.confirm}
          loading={clickLoading}
          onClick={buttonAction}
        >
          Confirmar
        </Button>
        <Button
          backgroundColor={theme.colors.buttons.cancel}
          borderColor={theme.colors.buttons.cancel}
          onClick={onClose}
        >
          Cancelar
        </Button>
      </>
    ),
  };

  const mapButtonsTypeSubmit = {
    default: (
      <>
        <Button
          backgroundColor={theme.colors.buttons.cancel}
          borderColor={theme.colors.buttons.cancel}
          loading={clickLoading}
        >
          Confirmar
        </Button>
        <Button
          backgroundColor={theme.colors.buttons.warning}
          borderColor={theme.colors.buttons.warning}
          onClick={onClose}
        >
          Cancelar
        </Button>
      </>
    ),
    confirm: (
      <>
        <Button
          backgroundColor={theme.colors.buttons.confirm}
          borderColor={theme.colors.buttons.confirm}
          loading={clickLoading}
          onClick={buttonAction}
        >
          Confirmar
        </Button>
        <Button
          backgroundColor={theme.colors.buttons.cancel}
          borderColor={theme.colors.buttons.cancel}
          onClick={onClose}
        >
          Cancelar
        </Button>
      </>
    ),
  };

  const populateFormProps = {
    submit: { onSubmit },
    click: {},
  };
  return (
    <DarkMask modalState={modalState}>
      <ModalBody>
        <ModalWrapper actionType={actionType} {...populateFormProps[actionType]}>
          <Header>
            <Typography type="h2" color={theme.colors.marca.black}>
              {title}
            </Typography>
            <CloseIcon size="2.188rem" onClick={onClose} />
          </Header>
          <Body>{children}</Body>
          <Footer>
            <div>
              {actionType === "click"
                ? mapButtonsTypeClick[buttonType]
                : mapButtonsTypeSubmit[buttonType]}
            </div>
          </Footer>
        </ModalWrapper>
      </ModalBody>
    </DarkMask>
  );
}

ModalSkeleton.defaultProps = {
  title: "Header Title",
  clickLoading: "false",
  buttonAction: () => undefined,
  modalState: "false",
  onClose: () => undefined,
  onSubmit: () => undefined,
};
ModalSkeleton.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func,
  onSubmit: PropTypes.func,
  actionType: PropTypes.oneOf(["submit", "click"]).isRequired,
  modalState: PropTypes.oneOf(["true", "false"]),
  buttonAction: PropTypes.func,
  clickLoading: PropTypes.oneOf(["true", "false"]),
  buttonType: PropTypes.oneOf(["default", "confirm"]).isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default ModalSkeleton;
