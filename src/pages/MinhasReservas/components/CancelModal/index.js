import { ModalSkeleton, Typography } from "../../../../components";
import theme from "../../../../theme/theme";

function CancelModal(props) {
  return (
    <ModalSkeleton {...props}>
      <Typography type="h3" color={theme.colors.marca.black}>
        Tem certeza que deseja prosseguir com o cancelamento de sua reserva?
      </Typography>
    </ModalSkeleton>
  );
}

export default CancelModal;
