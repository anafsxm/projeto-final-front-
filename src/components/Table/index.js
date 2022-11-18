import PropTypes from "prop-types";
import { StyledTable, Thead, Tbody } from "./styled";

function Table({ headersArray, children }) {
  return (
    <StyledTable>
      <Thead>
        <tr>
          {headersArray?.map(({ id, header }) => (
            <th key={id}>{header}</th>
          ))}
        </tr>
      </Thead>
      <Tbody>{children}</Tbody>
    </StyledTable>
  );
}

Table.defaultProps = {};

Table.propTypes = {
  headersArray: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      header: PropTypes.string,
    })
  ).isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Table;
