import { api } from "../api";

export function pegaProdutosComEstoque() {
  return api({
    url: "/produtos/estoque",
    method: "GET",
  });
}
