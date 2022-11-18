import { api } from "../api";
import { getAuthorizationToken } from "../actions";

export function pegaMinhasReservas() {
  return api({
    url: "/reserva/minhas-reservas",
    method: "GET",
    headers: {
      Authorization: `${getAuthorizationToken()}`,
    },
  });
}

export function cancelaReserva(id) {
  return api({
    url: `/reserva/${id}`,
    method: "DELETE",
    headers: {
      Authorization: `${getAuthorizationToken()}`,
    },
  });
}

export function getReserva(id) {
  return api({
    url: `/reserva/${id}`,
    method: "GET",
    headers: {
      Authorization: `${getAuthorizationToken()}`,
    },
  });
}

export function geraReserva(data) {
  return api({
    url: `/reserva`,
    method: "POST",
    headers: {
      Authorization: `${getAuthorizationToken()}`,
    },
    data,
  });
}

export function editaReserva(data) {
  return api({
    url: `/reserva/${data.id}`,
    method: "PUT",
    headers: {
      Authorization: `${getAuthorizationToken()}`,
    },
    data,
  });
}
