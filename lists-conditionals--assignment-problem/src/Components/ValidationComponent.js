import React from 'react'

const ValidationComponent = (props) => {
  let validationMessage;
  if (props.stringLength <= 5) {
    validationMessage = <p>Texto es muy pequeño!</p>;
  } else if (props.stringLength >= 10) {
    validationMessage = <p>Texto es muy grande!</p>;
  } else {
    validationMessage = <p>Texto está bien de largo!</p>;;
  }
  return validationMessage;
}

export default ValidationComponent;