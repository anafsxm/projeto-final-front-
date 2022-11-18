import PropTypes from "prop-types";
import { TableActionButton } from "../../../../components";
import theme from "../../../../theme/theme";

function ControlItensToBuy({ register, watch, id, icon, onClick }) {
  const watchInput = Number(watch(`${id}-prod`));

  return (
    <>
      <td>
        <input
          id={`${id}-prod`}
          type="number"
          placeholder="Quantidade"
          defaultValue={0}
          min={0}
          max={100}
          {...register}
        />
      </td>
      <td>
        <TableActionButton
          icon={icon}
          backgroundColor={theme.colors.buttons.edit}
          borderColor={theme.colors.buttons.edit}
          tooltip="Adicionar ao Carrinho"
          onClick={onClick}
          disabled={watchInput <= 0 ? "true" : "false"}
        />
      </td>
    </>
  );
}

ControlItensToBuy.propTypes = {
  id: PropTypes.number.isRequired,
  icon: PropTypes.element.isRequired,
  onClick: PropTypes.func.isRequired,
  watch: PropTypes.node.isRequired,
  register: PropTypes.node.isRequired,
};

export default ControlItensToBuy;
