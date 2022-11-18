import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { postLoginUsuario } from "../../service/requests/usuario";
import { BackgroundParticles, Button, Input, Typography } from "../../components/index";

import Coffee from "../../assets/coffea_logo.png";

import { Form, Container } from "./styled";
import theme from "../../theme/theme";

function Login() {
  const [loading, setLoading] = useState("false");
  const vaParaPagina = useNavigate();
  const { handleSubmit, watch, register } = useForm();

  const loginAndSetStorage = async (data) => {
    await postLoginUsuario(data).then((response) => {
      const { token, role } = response.data;
      localStorage.setItem("authorization", `Bearer ${token}`);
      localStorage.setItem("user-role", role);
      vaParaPagina("/home");
    });
  };

  const formularioSubmit = (valores) => {
    setLoading("true");
    loginAndSetStorage(valores)
      .catch(({ message }) => new Error({ message }))
      .finally(() => setLoading("false"));
  };

  return (
    <Container>
      <BackgroundParticles />
      <Form onSubmit={handleSubmit(formularioSubmit)}>
        <Typography type="h2" color={`${theme.colors.marca.brown}`} padding="1rem 0 0 0">
          Seja Bem-Vindo!!
        </Typography>
        <Typography type="h4" color={`${theme.colors.marca.brown}`} padding=".5rem 0">
          Faça seu login abaixo:
        </Typography>
        <img src={Coffee} alt="Imagem de uma xícara de café" />
        <Input
          type="text"
          label="E-mail"
          watch={watch}
          register={register("usuario")}
          name="usuario"
        />
        <Input
          type="password"
          label="Senha"
          watch={watch}
          register={register("senha")}
          name="senha"
        />

        <Button loading={loading}>Entrar</Button>
        <Typography type="p" padding="1rem 0 0 0" color={`${theme.colors.marca.brown}`}>
          Ainda não é cadastrado? Se cadastre <Link to="/create-user">aqui</Link>
        </Typography>
      </Form>
    </Container>
  );
}

export default Login;
