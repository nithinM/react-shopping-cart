import React from "react";
import OrderItemList from "./OrderItemList";

const OrderSummary = props => (
  <div
    className={`c-order-summary ${props.isPanelHide &&
      "c-order-summary--hide"}`}
  >
    <div className="c-order-summary__content">
      <OrderItemList />
      <div className="c-order-summary__section c-order-summary__section--checkout-notes">
        <div className="c-order-summary__checkout-notes">
          <div className="c-order-summary__checkout-notes-title">
            Notes about your order
          </div>
          <ul className="c-order-summary__checkout-notes-list">
            <li className="c-order-summary__checkout-notes-list-item">
              Your helmet will ship in 1-2 business days.
            </li>
            <li className="c-order-summary__checkout-notes-list-item">
              Signature required upon delivery.
            </li>
            <li className="c-order-summary__checkout-notes-list-item">
              Your backpack will ship in 1-2 business days.
            </li>
          </ul>
        </div>
      </div>

      <div className="c-order-summary__section c-order-summary__section--discount">
        <div className="c-order-summary__discont-text">Have a gift card?</div>
      </div>

      <div className="c-order-summary__section c-order-summary__section--total">
        <div className="c-order-summary__total">
          <div className="c-order-summary__total-label">Subtotal</div>
          <div className="c-order-summary__total-amount">$338.99</div>
        </div>
        <div className="c-order-summary__total">
          <div className="c-order-summary__total-label">Shipping</div>
          <div className="c-order-summary__total-amount">$11.00</div>
        </div>
        <div className="c-order-summary__total">
          <div className="c-order-summary__total-label">Taxes</div>
          <div className="c-order-summary__total-amount">$32.21</div>
        </div>

        <div className="c-order-summary__total-full">
          <div className="c-order-summary__total-label c-order-summary__total-label--lg">
            Total
          </div>
          <div className="c-order-summary__total-amount">
            <span className="c-order-summary__curreny-type">USD</span>
            <span className="c-order-summary__amount">$349.99</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default OrderSummary;
