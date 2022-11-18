import { useEffect, useState } from "react";
import { PageBody, Table, Typography } from "../../components";
import { geraRelatorio } from "../../service";
import theme from "../../theme/theme";

function ListagemRelatorios() {
  const [relatorio, setRelatorio] = useState([]);
  const [pageLoading, setPageLoading] = useState("false");

  const fill = async () => {
    setPageLoading("true");
    await geraRelatorio().then(({ data }) => {
      setRelatorio(data);
    });
  };

  useEffect(() => {
    fill()
      .catch(({ message }) => new Error({ message }))
      .finally(() => setPageLoading("false"));
  }, []);

  const tableHeaders = [
    { id: 0, header: "Produto" },
    { id: 1, header: "Quantidade" },
  ];

  return (
    <PageBody pageName="Listagem de Relatorios" pageLoading={pageLoading}>
      <Typography type="h3" align="center" color={theme.colors.marca.black} padding="1.25rem 0">
        Reltórios de produtos vendidos nos ultimos 90 dias
      </Typography>
      <Table headersArray={tableHeaders}>
        {relatorio?.map(({ nome, quantidade }) => (
          <tr key={nome}>
            <td>{nome}</td>
            <td>{quantidade}</td>
          </tr>
        ))}
      </Table>
    </PageBody>
  );
}

export default ListagemRelatorios;
