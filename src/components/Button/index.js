import PropTypes from "prop-types";
import { ImSpinner } from "react-icons/im";
import StyledButton from "./styled";

function Button({
  backgroundColor,
  borderColor,
  disabled,
  loading,
  children,
  loadingColor,
  textColor,
  onClick,
}) {
  return (
    <StyledButton
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      loading={loading}
      textColor={textColor}
      disabled={disabled === "true" || loading === "true"}
      onClick={onClick}
      type="submit"
    >
      {loading === "true" ? <ImSpinner color={loadingColor} size="1rem" /> : children}
    </StyledButton>
  );
}

Button.defaultProps = {
  backgroundColor: "",
  borderColor: "",
  disabled: "false",
  loadingColor: "",
  loading: "false",
  textColor: "",
  onClick: () => undefined,
};

Button.propTypes = {
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  disabled: PropTypes.oneOf(["true", "false"]),
  loadingColor: PropTypes.string,
  loading: PropTypes.oneOf(["true", "false"]),
  textColor: PropTypes.string,
};

export default Button;
