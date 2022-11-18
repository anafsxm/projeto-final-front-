import { useEffect, useState } from "react";
import { PageBody, Table } from "../../components";
import { pegaRestaurantes } from "../../service/requests/restaurante";

function Restaurantes() {
  const [restaurantes, setRestaurantes] = useState([]);
  const [pageLoading, setPageLoading] = useState("false");

  const fill = async () => {
    setPageLoading("true");
    await pegaRestaurantes()
      .then(({ data }) => {
        setRestaurantes(data);
      })
      .catch(({ message }) => new Error({ message }))
      .finally(() => setPageLoading("false"));
  };

  useEffect(() => {
    fill();
  }, []);

  const tableHeaders = [
    { id: 0, header: "Nome" },
    { id: 1, header: "Cidade" },
  ];

  return (
    <PageBody pageName="Restaurantes" pageLoading={pageLoading}>
      <Table headersArray={tableHeaders}>
        {restaurantes?.map(({ nome, cidade, id }) => (
          <tr key={id}>
            <td>{nome}</td>
            <td>{cidade}</td>
          </tr>
        ))}
      </Table>
    </PageBody>
  );
}

export default Restaurantes;
