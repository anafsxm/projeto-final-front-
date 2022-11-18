export const converterParaReais = (valor) =>
  valor?.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
