import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Input as StyledInput, InputGroup, Label } from "./styled";

function Input({ type, label, name, register, watch, ...props }) {
  const [keepFocus, setKeepFocus] = useState(false);
  const watchInput = watch(`${name}`)?.length;

  useEffect(() => {
    if (watchInput <= 0) {
      setKeepFocus(false);
      return;
    }
    if (watchInput >= 2) {
      setKeepFocus(true);
      return;
    }

    setKeepFocus(true);
  }, [watchInput]);

  return (
    <InputGroup>
      <StyledInput type={type} {...props} {...register} keepFocus={keepFocus} />
      <Label>{label}</Label>
    </InputGroup>
  );
}

Input.defaultProps = {
  type: "text",
};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  watch: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  register: PropTypes.node.isRequired,
};

export default Input;
