import React from "react";

const CardTypeIconSelect = ({ cCType }) => (
  <span className="c-card-types">
    <span
      className={`c-card-types__icon c-card-types--visa ${
        cCType === "" || typeof cCType === "undefined"
          ? ""
          : cCType === "Visa"
            ? ""
            : "c-card-types__icon--gray-scale"
      }`}
    />
    <span
      className={`c-card-types__icon c-card-types--master ${
        cCType === "" || typeof cCType === "undefined"
          ? ""
          : cCType === "Mastercard"
            ? ""
            : "c-card-types__icon--gray-scale"
      }`}
    />
    <span
      className={`c-card-types__icon c-card-types--amex ${
        cCType === "" || typeof cCType === "undefined"
          ? ""
          : cCType === "American Express"
            ? ""
            : "c-card-types__icon--gray-scale"
      }`}
    />
    <span
      className={`c-card-types__icon c-card-types--discover ${
        cCType === "" || typeof cCType === "undefined"
          ? ""
          : cCType === "Discover"
            ? ""
            : "c-card-types__icon--gray-scale"
      }`}
    />
    <span className="c-card-types__icon c-card-types--more">and more…</span>
  </span>
);

export default CardTypeIconSelect;
