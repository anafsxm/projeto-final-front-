import { api } from "../api";

export function pegaRestaurantes() {
  return api({
    url: "/restaurante/todos",
    method: "GET",
  });
}
