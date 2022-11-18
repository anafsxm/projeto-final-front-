import { api } from "../api";
import { getAuthorizationToken, getUserRole } from "../actions";

export function fechaPedido() {
  return api({
    url: "/pedido/realiza",
    method: "POST",
    headers: {
      Authorization: `${getAuthorizationToken()}`,
    },
  });
}

export function pegaMeusPedidos() {
  return api({
    url: "/pedido/meus-pedidos",
    method: "GET",
    headers: {
      Authorization: `${getAuthorizationToken()}`,
    },
  });
}

export function pegaPedidosAEnviar() {
  return api({
    url: "/pedido/pedidos-a-enviar",
    method: "GET",
    headers: {
      Authorization: `${getAuthorizationToken()}`,
    },
  });
}

export function enviaPedido(id) {
  return api({
    url: `/pedido/envia/${id}`,
    method: "PUT",
    headers: {
      Authorization: `${getAuthorizationToken()}`,
    },
  });
}

export function cancelaPedido(id) {
  return api({
    url: `/pedido/cancela-pedido/${id}`,
    method: "DELETE",
    headers: {
      Authorization: `${getAuthorizationToken()}`,
    },
  });
}

export function pegaPedidosByRole() {
  const role = getUserRole();
  if (role === "ROLE_USER") return pegaMeusPedidos();
  return pegaPedidosAEnviar();
}
