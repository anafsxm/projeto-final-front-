import PropTypes from "prop-types";
import { AiOutlineLoading3Quarters as LoadingIcon } from "react-icons/ai";
import theme from "../../theme/theme";
import Typography from "../Typography";

import { LoadingWrapper, Wrapper } from "./styled";

function PageLoading({ children, pageLoading }) {
  return pageLoading === "true" ? (
    <LoadingWrapper>
      <Wrapper>
        <LoadingIcon size="50px" color={theme.colors.marca.blue} />
        <Typography type="h1" color={theme.colors.marca.blue} padding="0 0 0 1.25rem">
          Loading...
        </Typography>
      </Wrapper>
    </LoadingWrapper>
  ) : (
    children
  );
}

PageLoading.defaultProps = {
  pageLoading: "false",
};
PageLoading.propTypes = {
  pageLoading: PropTypes.oneOf(["true", "false"]),
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};
export default PageLoading;
