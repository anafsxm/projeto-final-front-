import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button, Input, PageBody, Typography } from "../../components/index";
import { geraReserva, pegaRestaurantes } from "../../service/requests";
import { transformInApiAcceptDate } from "../../utils";

import { Form } from "./styled";
import theme from "../../theme/theme";
import { SelectWrapper } from "../../components/Input/styled";

function ReservaCriar() {
  const vaParaPagina = useNavigate();
  const { handleSubmit, watch, register } = useForm();
  const [pageLoading, setPageLoading] = useState("false");
  const [loading, setLoading] = useState("false");
  const [disabled, setDisabled] = useState("true");
  const [restaurantes, setRestaurantes] = useState([]);
  const [selected, setSelected] = useState([]);
  const [mesaId, setMesaId] = useState(0);

  const [watchQtPessoas, watchDate, watchTime] = [
    Number(watch("qtPessoas")),
    watch("date"),
    watch("time"),
  ];

  const reservar = async (data) => {
    await geraReserva(data).catch(({ message }) => new Error({ message }));
  };

  const formularioSubmit = async (valores) => {
    const { date, qtPessoas, time } = valores;
    const data = {
      mesaId,
      qtPessoas,
      dia: transformInApiAcceptDate(date, time),
    };
    setLoading("true");
    await reservar(data)
      .then(() => {
        vaParaPagina("/my-reservations");
      })
      .catch(({ message }) => new Error({ message }))
      .finally(() => setLoading("false"));
  };

  const fill = async () => {
    setPageLoading("true");
    await pegaRestaurantes()
      .then(({ data }) => {
        setRestaurantes(data);
        setSelected(restaurantes[0].mesas);
      })
      .catch(({ message }) => new Error({ message }))
      .finally(() => setPageLoading("false"));
  };

  useEffect(() => {
    fill();
  }, []);

  useEffect(() => {
    if (watchTime === "" || watchTime === undefined) return;
    if (watchDate === "" || watchDate === undefined) return;
    if (watchQtPessoas <= 0 || Number.isNaN(watchQtPessoas)) return;
    setDisabled("false");
  }, [watchQtPessoas, watchDate, watchTime]);

  return (
    <PageBody pageName="Criar Reserva" pageLoading={pageLoading}>
      <Form onSubmit={handleSubmit(formularioSubmit)}>
        <Typography type="h2" color={theme.colors.marca.brown} padding="1rem 0 0 0">
          Reserve abaixo sua mesa no dia e horário desejados:
        </Typography>
        <SelectWrapper>
          <Typography type="h4" color={theme.colors.marca.brown} padding="1rem 0 0 0">
            Selecione o restaurante
          </Typography>
          <select
            onChange={(value) => {
              setSelected(restaurantes[value.target.value].mesas);
            }}
          >
            {restaurantes?.map((option, index) => (
              <option value={index}>{option.nome}</option>
            ))}
            Restaurante
          </select>
        </SelectWrapper>
        <SelectWrapper>
          <Typography type="h4" color={theme.colors.marca.brown} padding="1rem 0 0 0">
            Selecione a mesa
          </Typography>
          <select
            onChange={(value) => {
              setMesaId(value.target.value);
            }}
          >
            {selected?.map((option) => (
              <option value={option.id}>{option.id}</option>
            ))}
            Mesa
          </select>
        </SelectWrapper>
        <div>
          <Input
            type="number"
            label="Quantidade de pessoas"
            watch={watch}
            register={register("qtPessoas")}
            name="qtPessoas"
            defaultValue={0}
            min={0}
          />
        </div>
        <div>
          <Input
            type="date"
            label="Dia"
            watch={watch}
            register={register("date")}
            name="dia"
            id="date"
          />
          <Input
            type="time"
            label="Horário"
            watch={watch}
            register={register("time")}
            id="time"
            name="time"
          />
        </div>
        <Button loading={loading} disabled={disabled}>
          Reservar
        </Button>
        <Typography type="p" padding="1rem 0 0 0" color={theme.colors.marca.brown} />
      </Form>
    </PageBody>
  );
}

export default ReservaCriar;
