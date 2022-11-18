const zeroValueLeft = (data) => {
  if (data.toString().length === 2) return data;
  return `0${data}`;
};
const zeroValueRight = (data) => {
  if (data.toString().length === 2) return data;
  return `${data}0`;
};

export const newDate = (value) => new Date(value);

export const transformInDate = (value) => {
  const data = newDate(value);
  const dataFormatada = `${zeroValueLeft(data.getDate())}/${zeroValueLeft(
    data.getMonth() + 1
  )}/${data.getFullYear()}`;

  return dataFormatada;
};
export const transformInHours = (value) => {
  const hora = newDate(value);
  const horaFormatada = `${hora.getHours()}:${zeroValueRight(hora.getMinutes())}`;

  return horaFormatada;
};

export const transformInApiAcceptDate = (date, hour) => {
  const primaryDate = new Date(`${date},${hour}`);
  const response = primaryDate.toISOString();
  return response;
};
