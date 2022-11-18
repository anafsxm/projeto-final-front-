import PropTypes from "prop-types";
import WrapperButton from "./styled";

function CardButtons({ icon, cardname, onClick }) {
  return (
    <WrapperButton onClick={onClick} title={cardname}>
      {icon}
      <p>{cardname}</p>
    </WrapperButton>
  );
}

CardButtons.defaultProps = {
  cardname: "",
  onClick: () => null,
};

CardButtons.propTypes = {
  cardname: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.element.isRequired,
};
export default CardButtons;
