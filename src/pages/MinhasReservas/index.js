import { useEffect, useState } from "react";
import { BiCommentEdit as EditIcon, BiCommentX as CancelIcon } from "react-icons/bi";
import { useForm } from "react-hook-form";
import { PageBody, Table, TableActionButton } from "../../components";
import { cancelaReserva, pegaMinhasReservas, editaReserva } from "../../service/requests";
import { transformInDate, transformInHours, transformInApiAcceptDate } from "../../utils";
import CancelModal from "./components/CancelModal";
import EditModal from "./components/EditModal";

import theme from "../../theme/theme";

function MinhasReservas() {
  const { handleSubmit, register, watch, setValue } = useForm();
  const [reservas, setReservas] = useState([]);
  const [pageLoading, setPageLoading] = useState("false");
  const [modalState, setModalState] = useState({
    edit: "false",
    cancel: "false",
  });
  const [loading, setLoading] = useState({
    edit: "false",
    cancel: "false",
  });
  const [modalActionsData, setModalActionsData] = useState({
    edit: undefined,
    cancel: {},
  });

  const setModalStates = (type, state, data) => {
    setModalState((oldState) => ({ ...oldState, [type]: `${state}` }));
    if (data) {
      setModalActionsData((oldState) => ({ ...oldState, [type]: data }));
    }
  };

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
    setLoading((oldState) => ({ ...oldState, cancel: "true" }));
    await cancelaReserva(idReserva)
      .catch(({ message }) => new Error({ message }))
      .finally(() => {
        fill();
        setLoading((oldState) => ({ ...oldState, cancel: "false" }));
        setModalStates("cancel", "false");
      });
  }

  const putEditaReserva = async (data) => {
    setLoading((oldState) => ({ ...oldState, edit: "true" }));
    await editaReserva(data);
  };

  const submitEdicaoReserva = (values) => {
    const { id, qtPessoas, date, time, mesaId } = values;
    const data = {
      id,
      mesaId,
      dia: transformInApiAcceptDate(date, time),
      qtPessoas,
    };
    putEditaReserva(data)
      .then(() => {
        setModalStates("edit", "false");
      })
      .catch(({ message }) => new Error({ message }))
      .finally(() => {
        fill();
        setLoading((oldState) => ({ ...oldState, edit: "false" }));
      });
  };
  useEffect(() => {
    fill();
  }, []);

  const tableHeaders = [
    { id: 1, header: "Restaurante" },
    { id: 2, header: "Dia" },
    { id: 3, header: "Hora" },
    { id: 4, header: "Quantidade de Pessoas" },
    { id: 5, header: "Ações" },
  ];

  return (
    <PageBody pageName="Minhas Reservas" pageLoading={pageLoading}>
      <h1>Reservas</h1>
      <Table headersArray={tableHeaders}>
        {reservas?.map(({ restaurante, dia, qtPessoas, idReserva }) => (
          <tr key={idReserva}>
            <td>{restaurante}</td>
            <td>{transformInDate(dia)}</td>
            <td>{transformInHours(dia)}</td>
            <td>{qtPessoas}</td>
            <td>
              <TableActionButton
                tooltip="Editar Reserva"
                icon={<EditIcon />}
                backgroundColor={theme.colors.buttons.edit}
                borderColor={theme.colors.buttons.edit}
                onClick={() => setModalStates("edit", "true", idReserva)}
                loading={loading.edit}
              />
              <TableActionButton
                tooltip="Cancelar Reserva"
                icon={<CancelIcon />}
                backgroundColor={theme.colors.buttons.cancel}
                borderColor={theme.colors.buttons.cancel}
                onClick={() => setModalStates("cancel", "true", idReserva)}
                loading={loading.cancel}
              />
            </td>
          </tr>
        ))}
      </Table>
      <CancelModal
        title="Cancelar reserva"
        actionType="click"
        buttonType="default"
        modalState={modalState.cancel}
        clickLoading={loading.cancel}
        onClose={() => setModalStates("cancel", "false")}
        buttonAction={() => handleCancelarReserva(modalActionsData.cancel)}
      />
      <EditModal
        title="Editar reserva"
        actionType="submit"
        buttonType="confirm"
        modalState={modalState.edit}
        clickLoading={loading.edit}
        onClose={() => setModalStates("edit", "false")}
        onSubmit={handleSubmit(submitEdicaoReserva)}
        register={register}
        watch={watch}
        idReserva={modalActionsData.edit}
        setValue={setValue}
      />
    </PageBody>
  );
}

export default MinhasReservas;
