import { useEffect, useState } from "react";
import { BiMessageAltX as CancelItemIcon } from "react-icons/bi";
import { PageBody, Table, TableActionButton } from "../../components";
import { cancelaPedido, pegaPedidosByRole } from "../../service/requests";
import { transformInDate, transformInHours } from "../../utils";
import theme from "../../theme/theme";

function MeusPedidos() {
  const [pedidos, setPedidos] = useState([]);
  const [buttonLoading, setButtonLoading] = useState("false");
  const [pageLoading, setPageLoading] = useState("false");
  const fill = async () => {
    setPageLoading("true");
    await pegaPedidosByRole()
      .then(({ data }) => {
        setPedidos(data);
      })
      .catch(({ message }) => new Error({ message }))
      .finally(() => setPageLoading("false"));
  };

  async function handleCancelaPedido(reservaId) {
    setButtonLoading("true");
    await cancelaPedido(reservaId)
      .catch(({ message }) => new Error({ message }))
      .finally(() => {
        fill();
        setButtonLoading("false");
      });
  }
  useEffect(() => {
    fill();
  }, []);

  const tableHeaders = [
    { id: 0, header: "Pedido" },
    { id: 1, header: "Data Pedido" },
    { id: 2, header: "Codigo de Rastreio" },
    { id: 3, header: "Situação" },
    { id: 4, header: "Ação" },
  ];

  const mapSituacao = {
    CANCELADO: "Pedido cancelado",
    PENDENTE_ENVIO: "Pendente de envio",
  };

  return (
    <PageBody pageName="Meus Pedidos" pageLoading={pageLoading}>
      <Table headersArray={tableHeaders}>
        {pedidos?.map(({ status, dataPedido, codigoRastreio, id }) => (
          <tr key={id}>
            <td>{id}</td>
            <td>{`${transformInDate(dataPedido)} às ${transformInHours(dataPedido)}`}</td>
            <td>{codigoRastreio || "Não se aplica"}</td>
            <td>{mapSituacao[status] || "Não se aplica"}</td>
            <td>
              {status === "PENDENTE_ENVIO" && (
                <TableActionButton
                  backgroundColor={theme.colors.buttons.cancel}
                  borderColor={theme.colors.buttons.cancel}
                  disabled={status === "PENDENTE_ENVIO" ? "false" : "true"}
                  icon={<CancelItemIcon />}
                  loading={buttonLoading}
                  tooltip="Cancelar Pedido"
                  onClick={() => handleCancelaPedido(id)}
                />
              )}
            </td>
          </tr>
        ))}
      </Table>
    </PageBody>
  );
}

export default MeusPedidos;
