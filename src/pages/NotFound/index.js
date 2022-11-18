import { Link } from "react-router-dom";
import { BackgroundParticles, Typography } from "../../components";
import Container from "./styled";

function NotFound() {
  return (
    <>
      <BackgroundParticles />{" "}
      <Container>
        <Typography type="h1" fontSize="5rem">
          404
        </Typography>
        <Typography type="h2" padding=" 0 0 20px 0">
          Not Found
        </Typography>
        <iframe
          title="notfound"
          src="https://giphy.com/embed/WS6ABEVwTwWew89CHo"
          width="580"
          height="580"
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
        />
        <Typography type="h4" padding="10px">
          Você foi para tão longe que perdemos você de vista, por favor, retorne logo para os campos
          conhecidos clicando <Link to="/home">aqui</Link>
        </Typography>
      </Container>
    </>
  );
}

export default NotFound;
