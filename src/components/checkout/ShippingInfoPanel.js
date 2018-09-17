import React from "react";
import { Link } from "react-router-dom";

const countries = require("country-list")();

const ShippingInfoPanel = ({
  email,
  address,
  apartment,
  city,
  state,
  zip,
  country,
  shippingMethod,
  shippingCost,
  backLink
}) => (
  <div className="c-panel">
    <div className="c-panel__row">
      <div className="c-panel__col-left">
        <div className="c-panel__col-inner">
          <div className="c-panel__label">Contact</div>
          <div className="c-panel__content">{email}</div>
        </div>
      </div>
      <div className="c-panel__col-right">
        <Link to={backLink} className="c-panel__link-block">
          Change
        </Link>
      </div>
    </div>
    <div className="c-panel__row">
      <div className="c-panel__col-left">
        <div className="c-panel__col-inner">
          <div className="c-panel__label">Ship to</div>
          <div className="c-panel__content">
            {`
                ${address},
                ${apartment !== "" ? `${apartment},` : `""`} 
                ${city} 
                ${state} 
                ${zip}, 
                ${countries.getName(country)}
             `}
          </div>
        </div>
      </div>
      <div className="c-panel__col-right c-panel__col-right--link">
        <div className="c-panel__link-block">
          <Link to={backLink} className="c-panel__link-block">
            Change
          </Link>
        </div>
      </div>
    </div>
    <div className="c-panel__row">
      <div className="c-panel__col-left">
        <div className="c-panel__col-inner">
          <div className="c-panel__label">Method</div>
          <div className="c-panel__content">{`${shippingMethod} · ${shippingCost.toFixed(
            2
          )}`}</div>
        </div>
      </div>
    </div>
  </div>
);

export default ShippingInfoPanel;
