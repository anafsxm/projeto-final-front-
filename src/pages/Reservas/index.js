import { useEffect, useState } from "react";
import { BiMessageAltX as CancelarButtonIcon } from "react-icons/bi";
import { PageBody, Table, TableActionButton } from "../../components";
import { cancelaReserva, pegaMinhasReservas } from "../../service/requests";
import { transformInDate, transformInHours } from "../../utils";

import theme from "../../theme/theme";

function Reservas() {
  const [reservas, setReservas] = useState([]);
  const [pageLoading, setPageLoading] = useState("false");
  const [loading, setLoading] = useState("false");

  const fill = async () => {
    setPageLoading("true");
    await pegaMinhasReservas()
      .then(({ data }) => {
        setReservas(data);
      })
      .catch(({ message }) => new Error({ message }))
      .finally(() => setPageLoading("false"));
  };

  async function handleCancelarReserva(idReserva) {
    setLoading("true");
    await cancelaReserva(idReserva)
      .catch(({ message }) => new Error({ message }))
      .finally(() => {
        fill();
        setLoading("false");
      });
  }

  useEffect(() => {
    fill();
  }, []);

  const tableHeaders = [
    { id: 0, header: "Restaurante" },
    { id: 1, header: "Data e Horário" },
    { id: 2, header: "Quantidade de Pessoas" },
    { id: 3, header: "Ações" },
  ];

  return (
    <PageBody pageName="Minhas Reservas" pageLoading={pageLoading}>
      <Table headersArray={tableHeaders}>
        {reservas?.map(({ restaurante, dia, qtPessoas, idReserva }) => (
          <tr key={idReserva}>
            <td>{restaurante}</td>
            <td>{`${transformInDate(dia)} às ${transformInHours(dia)}`}</td>
            <td>{qtPessoas}</td>
            <td>
              <TableActionButton
                backgroundColor={theme.colors.buttons.cancel}
                borderColor={theme.colors.buttons.cancel}
                icon={<CancelarButtonIcon />}
                loading={loading}
                onClick={() => handleCancelarReserva(idReserva)}
                tooltip="Cancelar Reserva"
              />
            </td>
          </tr>
        ))}
      </Table>
    </PageBody>
  );
}

export default Reservas;
