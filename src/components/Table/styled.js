import styled from "styled-components";
import theme from "../../theme/theme";

export const StyledTable = styled.table`
  width: 100%;
  overflow: auto;
  border-color: ${theme.colors.marca.black};
  border-collapse: collapse;
  margin-bottom: 1.25rem;
  td,
  th {
    padding: 5px;
    text-align: center;
    border: 2px solid ${theme.colors.marca.black};
    font-size: 18px;
  }
`;

export const Thead = styled.thead`
  tr {
    background-color: ${theme.colors.marca.brown};
  }
`;

export const Tbody = styled.tbody`
  tr:nth-of-type(even) {
    background-color: ${theme.colors.table.treven};
  }
  tr:nth-of-type(odd) {
    background-color: ${theme.colors.table.odd};
  }
`;
