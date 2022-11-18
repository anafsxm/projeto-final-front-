import { api } from "../api";

export const geraRelatorio = () => {
  const hoje = new Date();
  const diasAtras = new Date(new Date().setDate(hoje.getDate() - 90));

  return api({
    url: `/relatorios/produtos`,
    method: "GET",
    data: null,
    params: {
      dataInicio: diasAtras.toISOString(),
      dataFim: hoje.toISOString(),
    },
  });
};
