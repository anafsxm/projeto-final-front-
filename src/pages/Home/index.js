import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BiShoppingBag as Produtos,
  BiCart as Carrinho,
  BiArchive as MeusPedidos,
  BiCalendarEvent as MinhasReservas,
  BiReceipt as ListagemRelatorios,
  BiTrip as OrdensDeEnvio,
  BiCalendarEdit as Reservas,
  BiCalendarWeek as CriarReservas,
} from "react-icons/bi";
import { CardButtons, PageBody, Typography } from "../../components";
import { getUserRole } from "../../service";

import theme from "../../theme/theme";
import Wrapper from "./styled";

function Home() {
  const vaParaPagina = useNavigate();
  const [userRole, setUserRole] = useState("");
  useEffect(() => {
    const role = getUserRole();
    setUserRole(role);
  }, []);

  const mapUserRoleCards = {
    ROLE_ADMIN: [
      {
        id: 0,
        path: "/listing-reports",
        cardname: "Listagem Relatórios",
        icon: <ListagemRelatorios />,
      },
      { id: 1, path: "/products", cardname: "Produtos", icon: <Produtos /> },
      { id: 2, path: "/shipping-orders", cardname: "Ordens de envio", icon: <OrdensDeEnvio /> },
      { id: 4, path: "/reservations", cardname: "Reservas", icon: <Reservas /> },
    ],
    ROLE_USER: [
      { id: 0, path: "/products", cardname: "Produtos", icon: <Produtos /> },
      { id: 1, path: "/my-requests", cardname: "Meus Pedidos", icon: <MeusPedidos /> },
      { id: 2, path: "/my-reservations", cardname: "Minhas Reservas", icon: <MinhasReservas /> },
      { id: 3, path: "/my-cart", cardname: "Meu Carrinho", icon: <Carrinho /> },
      { id: 3, path: "/create-reservation", cardname: "Criar Reserva", icon: <CriarReservas /> },
    ],
  };
  return (
    <PageBody hiddenback="true" pageName="Home">
      <Typography type="h1" align="center" margin="0 0 50px 0" color={theme.colors.marca.black}>
        Escolha abaixo o serviço que deseja acessar:
      </Typography>
      <Wrapper>
        {mapUserRoleCards[userRole]?.map(({ id, cardname, icon, path }) => (
          <CardButtons
            key={id}
            icon={icon}
            cardname={cardname}
            onClick={() => vaParaPagina(`${path}`)}
          />
        ))}
      </Wrapper>
    </PageBody>
  );
}

export default Home;
