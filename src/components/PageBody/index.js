import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import BackgroundParticles from "../BackgroundParticles";
import { userLogout } from "../../service";
import PageLoading from "../PageLoading";

import { Header, Main, LogoutIcon, ReturnIcon, PageTitle } from "./styled";

import COFFEA from "../../assets/coffea_full_logo.png";

function PageBody({ children, goBack, hiddenback, pageName, pageLoading }) {
  const vaParaPagina = useNavigate();
  return (
    <>
      <BackgroundParticles />
      <Main>
        <PageLoading pageLoading={pageLoading}>
          <Header>
            <ReturnIcon
              size="35px"
              onClick={() => vaParaPagina(`${goBack}`)}
              hiddenback={hiddenback}
            />
            <img
              src={COFFEA}
              alt="Logo composta por uma xícara de café saindo fumaça e o escrito coffea"
            />
            <LogoutIcon
              size="35px"
              onClick={() => {
                userLogout();
                vaParaPagina("/");
              }}
            />
          </Header>
          {pageName !== "" && (
            <PageTitle>
              <h1>{pageName}</h1>
              <div />
            </PageTitle>
          )}
          {children}
        </PageLoading>
      </Main>
    </>
  );
}

PageBody.defaultProps = {
  pageLoading: "false",
  goBack: "/home",
  hiddenback: "false",
  pageName: "",
};

PageBody.propTypes = {
  goBack: PropTypes.string,
  hiddenback: PropTypes.oneOf(["true", "false"]),
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  pageName: PropTypes.string,
  pageLoading: PropTypes.oneOf(["true", "false"]),
};

export default PageBody;
