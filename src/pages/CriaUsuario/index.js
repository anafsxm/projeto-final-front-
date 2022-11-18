import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { criaUsuario } from "../../service/requests/usuario";
import { BackgroundParticles, Button, Input, Typography } from "../../components/index";

import Coffee from "../../assets/coffea_logo.png";

import { Form, Container } from "./styled";

function CriaUsuario() {
  const [loading, setLoading] = useState("false");
  const vaParaPagina = useNavigate();
  const { handleSubmit, watch, register } = useForm();

  const handleCriarUsuario = async (data) => {
    await criaUsuario(data).then(() => {
      vaParaPagina("/");
    });
  };

  const formularioSubmit = (valores) => {
    setLoading("true");
    handleCriarUsuario(valores)
      .catch(({ message }) => new Error({ message }))
      .finally(() => setLoading("false"));
  };

  return (
    <Container>
      <BackgroundParticles />
      <Form onSubmit={handleSubmit(formularioSubmit)}>
        <Typography type="h2" padding="1rem 0 0 0">
          Seja Bem-Vindo!!
        </Typography>
        <Typography type="h4" padding=".5rem 0">
          Cadastre seu usuário abaixo:
        </Typography>
        <img src={Coffee} alt="Imagem de uma xícara de café" />

        <Input type="text" label="E-mail" watch={watch} register={register("email")} name="email" />
        <Input
          type="password"
          label="Senha"
          watch={watch}
          register={register("senha")}
          name="senha"
        />
        <Input type="text" label="Nome" watch={watch} register={register("nome")} name="nome" />
        <Input
          type="telefone"
          label="Telefone"
          watch={watch}
          register={register("telefone")}
          name="telefone"
        />

        <Button loading={loading}>Entrar</Button>
        <Typography type="p" padding="1rem 0 0 0">
          Já cadastrado? Faça login <Link to="/">aqui</Link>
        </Typography>
      </Form>
    </Container>
  );
}

export default CriaUsuario;
