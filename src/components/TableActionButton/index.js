import PropTypes from "prop-types";
import { ImSpinner } from "react-icons/im";
import StyledButton from "./styled";

function Button({
  backgroundColor,
  borderColor,
  disabled,
  loading,
  loadingColor,
  onClick,
  icon,
  tooltip,
  ...props
}) {
  return (
    <StyledButton
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      loading={loading}
      disabled={disabled === "true" || loading === "true"}
      onClick={onClick}
      type="submit"
      title={tooltip}
      {...props}
    >
      {loading === "true" ? <ImSpinner color={loadingColor} size="20px" /> : icon}
    </StyledButton>
  );
}

Button.defaultProps = {
  backgroundColor: "",
  borderColor: "",
  disabled: "false",
  loadingColor: "",
  loading: "false",
  onClick: () => undefined,
  tooltip: "",
};

Button.propTypes = {
  icon: PropTypes.element.isRequired,
  tooltip: PropTypes.string,
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.oneOf(["true", "false"]),
  loadingColor: PropTypes.string,
  loading: PropTypes.oneOf(["true", "false"]),
};

export default Button;
