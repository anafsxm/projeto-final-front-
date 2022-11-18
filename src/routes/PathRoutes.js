import {
  CriaUsuario,
  Home,
  Login,
  NotFound,
  ListagemRelatorios,
  Produtos,
  OrdensEnvio,
  MeusPedidos,
  MinhasReservas,
  Carrinho,
  Reservas,
  ReservaCriar,
} from "../pages";
import PrivateRoute from "./PrivateRoute";

export default [
  {
    id: 0,
    path: "/",
    exact: true,
    element: <Login />,
  },
  {
    id: 1,
    path: "/create-user",
    exact: true,
    element: <CriaUsuario />,
  },
  {
    id: 2,
    path: "/home",
    exact: true,
    element: (
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    ),
  },

  {
    id: 3,
    path: "/listing-reports",
    exact: true,
    element: (
      <PrivateRoute admin>
        <ListagemRelatorios />
      </PrivateRoute>
    ),
  },
  {
    id: 4,
    path: "/products",
    exact: true,
    element: (
      <PrivateRoute>
        <Produtos />
      </PrivateRoute>
    ),
  },
  {
    id: 5,
    path: "/create-reservation",
    exact: true,
    element: (
      <PrivateRoute>
        <ReservaCriar />
      </PrivateRoute>
    ),
  },
  {
    id: 6,
    path: "/shipping-orders",
    exact: true,
    element: (
      <PrivateRoute>
        <OrdensEnvio />
      </PrivateRoute>
    ),
  },
  {
    id: 7,
    path: "/my-requests",
    exact: true,
    element: (
      <PrivateRoute>
        <MeusPedidos />
      </PrivateRoute>
    ),
  },
  {
    id: 8,
    path: "/my-reservations",
    exact: true,
    element: (
      <PrivateRoute>
        <MinhasReservas />
      </PrivateRoute>
    ),
  },
  {
    id: 9,
    path: "/reservations",
    exact: true,
    element: (
      <PrivateRoute admin>
        <Reservas />
      </PrivateRoute>
    ),
  },
  {
    id: 10,
    path: "/my-cart",
    exact: true,
    element: (
      <PrivateRoute>
        <Carrinho />
      </PrivateRoute>
    ),
  },
  {
    id: 11,
    path: "*",
    element: <NotFound />,
  },
];
