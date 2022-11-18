import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiMessageAltX as CancelarButtonIcon } from "react-icons/bi";
import { Button, PageBody, Table, TableActionButton } from "../../components";
import { fechaPedido } from "../../service/requests";
import { atualizaCarrinhoUsuario, getCarrinhoUsuario } from "../../service/requests/carrinho";
import theme from "../../theme/theme";
import { converterParaReais } from "../../utils";
import { ButtonWrapper } from "./styled";

function Carrinho() {
  const [carrinho, setCarrinho] = useState([]);
  const [pageLoading, setPageLoading] = useState("false");
  const [buttonLoading, setButtonLoading] = useState("false");
  const vaParaPagina = useNavigate();
  const [loading] = useState({
    cancel: "false",
  });

  const fill = async () => {
    setPageLoading("true");
    await getCarrinhoUsuario()
      .then(({ data }) => {
        setCarrinho(data?.itensCarrinho);
      })
      .catch(({ message }) => new Error({ message }))
      .finally(() => setPageLoading("false"));
  };

  async function handleRemoveCarrinho(produtoId) {
    await atualizaCarrinhoUsuario(produtoId, 0).catch(({ message }) => new Error({ message }));
    fill();
  }

  async function handleFechaPedido() {
    setButtonLoading("true");
    await fechaPedido()
      .then(() => {
        vaParaPagina("/my-requests");
      })
      .catch(({ message }) => new Error({ message }))
      .finally(() => setButtonLoading("false"));
  }

  useEffect(() => {
    fill();
  }, []);

  const tableHeaders = [
    { id: 0, header: "Produto" },
    { id: 1, header: "Quantidade" },
    { id: 2, header: "Valor" },
    { id: 3, header: "Descrição" },
    { id: 4, header: "Remover Carrinho" },
  ];

  return (
    <PageBody pageName="Meu Carrinho" pageLoading={pageLoading}>
      <Table headersArray={tableHeaders}>
        {carrinho?.map(({ produto, qt }) => (
          <tr key={produto.id}>
            <td>{produto.nome}</td>
            <td>{qt}</td>
            <td>{converterParaReais(produto.valor * qt)}</td>
            <td>{produto.descricao}</td>
            <td>
              <TableActionButton
                backgroundColor={theme.colors.buttons.cancel}
                borderColor={theme.colors.buttons.cancel}
                icon={<CancelarButtonIcon />}
                loading={loading.cancel}
                onClick={() => handleRemoveCarrinho(produto.id)}
                tooltip="Remover Carrinho"
              />
            </td>
          </tr>
        ))}
      </Table>

      <ButtonWrapper>
        <Button
          onClick={() => handleFechaPedido()}
          disabled={carrinho?.length <= 0 ? "true" : "false"}
          loading={buttonLoading}
        >
          Fechar pedido
        </Button>
      </ButtonWrapper>
    </PageBody>
  );
}

export default Carrinho;
