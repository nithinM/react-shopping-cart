import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Button";
import ShippingInfoPanel from "../ShippingInfoPanel";

class ShippingMethodForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shippingCost: 5,
      shippingMethod: "Helmet Shipping - United States",
      customerEmail: props.customerInfo.email,
      address: props.shippingAddress.address,
      apartment: props.shippingAddress.apartment,
      city: props.shippingAddress.city,
      country: props.shippingAddress.country,
      state: props.shippingAddress.state,
      zip: props.shippingAddress.zip
    };
  }

  onChange = e => {
    switch (e.target.shippingmethod) {
      case "Helmet Shipping - United States":
        const checkedValueShippingCost = e.target.value;
        this.setState(() => ({
          shippingCost: checkedValueShippingCost,
          shippingMethod: "Helmet Shipping - United States"
        }));
        break;
    }
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({
      shippingCost: this.state.shippingCost,
      shippingMethod: this.state.shippingMethod
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="c-form__section c-form__section--shipping-address-info">
          <div className="c-form__section-fieldset">
            <div className="c-field">
              <ShippingInfoPanel
                email={this.state.customerEmail}
                address={this.state.address}
                apartment={this.state.apartment}
                city={this.state.city}
                country={this.state.country}
                state={this.state.state}
                zip={this.state.zip}
                shippingMethod={this.state.shippingMethod}
                shippingCost={this.state.shippingCost}
                backLink="/checkout/customer-information"
              />
            </div>
          </div>
        </div>

        <div className="c-form__section c-form__section--shipping-method">
          <div className="c-form__section-header">Shipping method</div>
          <div className="c-form__section-fieldset">
            <div className="c-field">
              <div className="c-panel c-panel--single c-panel--last">
                <div className="c-panel__row">
                  <div className="c-panel__col-left">
                    <div className="c-panel__col-inner">
                      <div className="c-panel__radio-button">
                        <input
                          className="c-field__input-radio"
                          type="radio"
                          id="shipping-method"
                          name="radio-group"
                          shippingmethod="Helmet Shipping - United States"
                          value={this.state.shippingCost}
                          onChange={this.onChange}
                          checked={this.state.shippingCost && true}
                        />
                        <label
                          className="c-field__radio-label"
                          htmlFor="shipping-method"
                        />
                      </div>
                      <div className="c-panel__content">
                        <div className="c-panel__content-text">
                          Helmet Shipping - United States
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="c-panel__col-righ c-panel__col-right--amount">
                    $5.00
                  </div>
                </div>
              </div>
            </div>

            <div className="c-field c-field">
              <div className="c-field__button-bottom">
                <Link
                  className="c-field__button-back c-field__button-back--long-text"
                  to="/checkout/customer-information"
                >
                  Return to customer information
                </Link>

                <Button
                  type="submit-lg"
                  size="default"
                  ariaLabel="Continue to payment method"
                  text="Continue to payment method"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default ShippingMethodForm;
