import React from "react";
import Button from "../Button";

const AlternativePayment = () => (
  <div className="c-payment__alternative">
    <Button
      type="googlePay"
      size="default"
      className="c-button--inline"
      ariaLabel="GooglePay"
    />
    <Button
      type="amazonPay"
      size="default"
      className="c-button--inline"
      ariaLabel="AmazonPay"
    />
    <hr className="c-divider__light c-divider__light--payment-button" />
  </div>
);

export default AlternativePayment;
