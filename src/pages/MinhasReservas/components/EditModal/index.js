import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Input, ModalSkeleton, PageLoading, Typography } from "../../../../components";
import theme from "../../../../theme/theme";
import { getReserva } from "../../../../service/requests";

import InputWrapper from "./styled";

function EditModal({ idReserva, register, watch, setValue, ...props }) {
  const [reserva, setReserva] = useState(undefined);
  const [pageLoading, setPageLoading] = useState("false");

  const setValues = (data) => {
    const { qtPessoas, dia, mesaId } = data;
    setValue("id", `${idReserva}`);
    setValue("mesaId", `${mesaId}`);
    setValue("qtPessoas", `${qtPessoas}`);
    setValue("date", `${dia.slice(0, 10)}`);
    setValue("time", `${dia.slice(11)}`);
  };

  const getReservaById = async (id) => {
    setPageLoading("true");
    await getReserva(id).then(({ data }) => {
      setValues(data);
      setReserva(data);
    });
  };

  useEffect(() => {
    if (idReserva === undefined) return;
    getReservaById(idReserva)
      .catch(({ message }) => new Error({ message }))
      .finally(() => setPageLoading("false"));
  }, [idReserva]);

  return (
    <ModalSkeleton {...props}>
      <PageLoading pageLoading={pageLoading}>
        <Typography type="h3" align="center" color={theme.colors.marca.black}>
          {`Edite abaixo sua reserva no restaurante ${
            reserva?.restaurante || ""
          } conforme sua preferencia:`}
          <InputWrapper>
            <Input
              type="text"
              label="Quantidade de Pessoas"
              watch={watch}
              register={register("qtPessoas")}
              name="qtPessoas"
            />
            <Input type="date" label="Data" watch={watch} register={register("date")} name="date" />
            <Input type="time" label="Hora" watch={watch} register={register("time")} name="time" />
          </InputWrapper>
        </Typography>
      </PageLoading>
    </ModalSkeleton>
  );
}

EditModal.propTypes = {
  idReserva: PropTypes.string.isRequired,
  watch: PropTypes.node.isRequired,
  register: PropTypes.node.isRequired,
  setValue: PropTypes.node.isRequired,
};

export default EditModal;
