import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiMessageAltAdd as AddToCardIcon } from "react-icons/bi";
import { useForm } from "react-hook-form";
import { PageBody, Table } from "../../components";
import { atualizaCarrinhoUsuario } from "../../service/requests";
import { pegaProdutosComEstoque } from "../../service/requests/produtos";

import { converterParaReais } from "../../utils";
import ControlItensToBuy from "./component/ControlItensToBuy";

function Produtos() {
  const { register, watch, getValues } = useForm();
  const vaParaPagina = useNavigate();
  const getElementById = (produtoId) => getValues(`${produtoId}-prod`);
  const [produtos, setProdutos] = useState([]);
  const [pageLoading, setPageLoading] = useState("false");

  const fill = async () => {
    setPageLoading("true");
    await pegaProdutosComEstoque()
      .then(({ data }) => {
        setProdutos(data);
      })
      .catch(({ message }) => new Error({ message }))
      .finally(() => setPageLoading("false"));
  };

  async function handleUpdateCarrinho(produtoId) {
    const qt = getElementById(produtoId);
    await atualizaCarrinhoUsuario(produtoId, qt)
      .then(() => {
        vaParaPagina("/my-cart");
      })
      .catch(({ message }) => new Error({ message }));
  }

  useEffect(() => {
    fill();
  }, []);
  const tableHeaders = [
    { id: 0, header: "Nome" },
    { id: 1, header: "Quantidade" },
    { id: 2, header: "Valor" },
    { id: 3, header: "Descrição" },
    { id: 4, header: "Número de itens" },
    { id: 5, header: "Ação" },
  ];

  return (
    <PageBody pageName="Produtos" pageLoading={pageLoading}>
      <h1>Produtos</h1>
      <Table headersArray={tableHeaders}>
        {produtos?.map(({ id, nome, quantidade, valor, descricao }) => (
          <tr key={id}>
            <td>{nome}</td>
            <td>{quantidade}</td>
            <td>{converterParaReais(valor)}</td>
            <td>{descricao}</td>
            <ControlItensToBuy
              register={register(`${id}-prod`)}
              watch={watch}
              getValues={getValues}
              id={id}
              icon={<AddToCardIcon />}
              onClick={() => handleUpdateCarrinho(id)}
            />
          </tr>
        ))}
      </Table>
    </PageBody>
  );
}

export default Produtos;
