import PropTypes from "prop-types";
import GenericTitle from "./styled";
import theme from "../../theme/theme";

function Typography({ align, color, children, fontSize, fontWeight, margin, padding, type }) {
  return (
    <GenericTitle
      align={align}
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      margin={margin}
      padding={padding}
      type={type}
    >
      {children}
    </GenericTitle>
  );
}

Typography.defaultProps = {
  align: "left",
  color: `${theme.colors.marca.brown}`,
  fontSize: "",
  fontWeight: "",
  margin: "0",
  padding: "0",
};
Typography.propTypes = {
  align: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  type: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "p"]).isRequired,
};

export default Typography;
