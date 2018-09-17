import React from "react";

const translateProps = props => {
  let buttonClass = "c-button";

  switch (props.type) {
    case "googlePay":
      buttonClass += " c-button--default c-button--googlePay";
      break;
    case "amazonPay":
      buttonClass += " c-button--default c-button--amazonPay";
      break;
    case "submit-lg":
      buttonClass += " c-button--lg c-button--orange";
      break;
    case "submit-sm":
      buttonClass += " c-button--sm c-button--orange";
      break;
  }

  if (props.className) {
    buttonClass += ` ${props.className}`;
  }

  return { ...props, classes: buttonClass };
};

export default WrappedComponent => props =>
  WrappedComponent(translateProps(props));
