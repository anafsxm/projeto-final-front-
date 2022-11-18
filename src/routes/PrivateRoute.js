import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

function PrivateRoute({ admin, children }) {
  const naoAdminValidado = !!localStorage.getItem("authorization");
  const adminValidado =
    !!localStorage.getItem("authorization") && localStorage.getItem("user-role") === "ROLE_ADMIN";
  const eUsuarioValido = admin ? adminValidado : naoAdminValidado;

  return eUsuarioValido ? children : <Navigate to="/" replace />;
}

PrivateRoute.defaultProps = {
  admin: false,
};

PrivateRoute.propTypes = {
  admin: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default PrivateRoute;
