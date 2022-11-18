import { useEffect, useState } from "react";
import {
  BiNavigation as EnviarButtonIcon,
  BiMessageAltX as CancelarButtonIcon,
} from "react-icons/bi";
import { PageBody, Table, TableActionButton } from "../../components";
import { cancelaPedido, enviaPedido, pegaMeusPedidos } from "../../service/requests";
import { transformInDate, transformInHours } from "../../utils";

import { WrapperButtons } from "./styled";
import theme from "../../theme/theme";

function OrdensEnvio() {
  const [pedidos, setPedidos] = useState([]);
  const [pageLoading, setPageLoading] = useState("false");
  const [loading, setLoading] = useState({
    send: "false",
    cancel: "false",
  });

  const fill = async () => {
    setPageLoading("true");
    await pegaMeusPedidos()
      .then(({ data }) => {
        setPedidos(data);
      })
      .catch(({ message }) => new Error({ message }))
      .finally(() => setPageLoading("false"));
  };

  async function handleCancelaPedido(reservaId) {
    setLoading((oldState) => ({ ...oldState, cancel: "true" }));
    await cancelaPedido(reservaId)
      .catch(({ message }) => new Error({ message }))
      .finally(() => {
        fill();
        setLoading((oldState) => ({ ...oldState, cancel: "false" }));
      });
  }

  async function handleEnviaPedido(pedidoId) {
    setLoading((oldState) => ({ ...oldState, send: "true" }));
    await enviaPedido(pedidoId)
      .catch(({ message }) => new Error({ message }))
      .finally(() => {
        fill();
        setLoading((oldState) => ({ ...oldState, send: "false" }));
      });
  }

  useEffect(() => {
    fill();
  }, []);

  const tableHeaders = [
    { id: 0, header: "Pedido" },
    { id: 1, header: "Data Pedido" },
    { id: 2, header: "Código de Rastreio" },
    { id: 3, header: "Situação" },
    { id: 4, header: "Ações" },
  ];

  const mapSituacao = {
    CANCELADO: "Cancelado",
    ENVIADO: "Enviado",
    PENDENTE_ENVIO: "Pendente de envio",
  };

  const disabledStatus = (status) => {
    if (status === "CANCELADO") return "true";
    if (status === "ENVIADO") return "true";

    return "false";
  };

  return (
    <PageBody pageName="Ordens de envio" pageLoading={pageLoading}>
      <Table headersArray={tableHeaders}>
        {pedidos?.map(({ status, dataPedido, codigoRastreio, id }) => (
          <tr key={id}>
            <td>{id}</td>
            <td>{`${transformInDate(dataPedido)} às ${transformInHours(dataPedido)}`}</td>
            <td>{codigoRastreio || "Não se aplica"}</td>
            <td>{mapSituacao[status]}</td>
            <td>
              <WrapperButtons>
                <TableActionButton
                  backgroundColor={theme.colors.buttons.confirm}
                  borderColor={theme.colors.buttons.confirm}
                  icon={<EnviarButtonIcon />}
                  loading={loading.send}
                  onClick={() => handleEnviaPedido(id)}
                  disabled={disabledStatus(status)}
                  tooltip="Enviar Pedido"
                />
                <TableActionButton
                  backgroundColor={theme.colors.buttons.cancel}
                  borderColor={theme.colors.buttons.cancel}
                  icon={<CancelarButtonIcon />}
                  loading={loading.cancel}
                  onClick={() => handleCancelaPedido(id)}
                  disabled={disabledStatus(status)}
                  tooltip="Cancelar Pedido"
                />
              </WrapperButtons>
            </td>
          </tr>
        ))}
      </Table>
    </PageBody>
  );
}

export default OrdensEnvio;
