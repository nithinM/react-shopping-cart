import React from "react";

const OrderItemListItem = ({
  thumbnail,
  name,
  description,
  price,
  quantity,
  currencyType
}) => (
  <React.Fragment>
    <div className="c-order-summary__item">
      <div className="c-order-summary__item-image-wrap">
        <div className="c-order-summary__item-image-holder">
          <img
            className="c-order-summary__item-image"
            src={thumbnail}
            alt={name}
          />
          <span className="c-order-summary__item-quantity">{quantity}</span>
        </div>
      </div>
      <div className="c-order-summary__item-info">
        <span className="c-order-summary__item-name">{name}</span>
        <span className="c-order-summary__item-details">{description}</span>
      </div>
      <div className="c-order-summary__item-price">{`${currencyType}${(
        price / 100
      ).toFixed(2)}`}</div>
    </div>
  </React.Fragment>
);

export default OrderItemListItem;
