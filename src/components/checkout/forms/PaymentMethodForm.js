import React from "react";
import { Link } from "react-router-dom";
import { Number, Cvc, Expiration } from "react-credit-card-primitives";
import validator from "validator";
import InputMask from "react-input-mask";
import FormInputField from "../../FormInputField";
import Button from "../../Button";
import ShippingInfoPanel from "../ShippingInfoPanel";
import CreditCardInputs from "../../CreditCardInputs";
import CardTypeIconSelect from "../CardTypeIconSelect";
import { isValidZipCode } from "../../../util/customValidation";

class PaymentMethodForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paymentMethod: "creditCard",
      billingAddress: "shippingAddress",
      cCType: "",
      cCNumber: "",
      cCNumberValid: false,
      cCNumberError: false,
      cCExpiration: "",
      cCExpirationValid: false,
      cCExpirationError: "",
      cCCvc: "",
      cCCvcValid: false,
      cCCvcError: "",
      cCHolder: "",
      cCHolderError: "",
      shippingCost: 5,
      shippingMethod: "Helmet Shipping - United States",
      customerEmail: props.customerInfo.email,
      shippingAddress: props.shippingAddress.address,
      shippingApartment: props.shippingAddress.apartment,
      shippingCity: props.shippingAddress.city,
      shippingCountry: props.shippingAddress.country,
      shippingState: props.shippingAddress.state,
      shippingZip: props.shippingAddress.zip,
      firstName: props.shippingAddress.firstName
        ? props.shippingAddress.firstName
        : "",
      firstNameError: "",
      lastName: props.shippingAddress.lastName
        ? props.shippingAddress.lastName
        : "",
      lastNameError: "",
      company: props.shippingAddress.company
        ? props.shippingAddress.company
        : "",
      address: props.shippingAddress.address
        ? props.shippingAddress.address
        : "",
      addressError: "",
      apartment: props.shippingAddress.apartment
        ? props.shippingAddress.apartment
        : "",
      city: props.shippingAddress.city ? props.shippingAddress.city : "",
      cityError: "",
      country: props.shippingAddress.country
        ? props.shippingAddress.country
        : "us",
      countryError: "",
      state: props.shippingAddress.state ? props.shippingAddress.state : "",
      stateError: "",
      zip: props.shippingAddress.zip ? props.shippingAddress.zip : "",
      zipError: "",
      phone: props.shippingAddress.phone ? props.shippingAddress.phone : "",
      phoneError: ""
    };
    const _isMounted = false;
  }

  onChange = e => {
    const value = e.target.value;
    switch (e.target.name) {
      case "paymentMethod":
        const checkedValuePaymentMethod = value;
        this.setState(() => ({
          paymentMethod: checkedValuePaymentMethod
        }));
        break;
      case "billingAddress":
        const checkedValueBillingAddress = value;
        this.setState(() => ({
          billingAddress: checkedValueBillingAddress
        }));
        break;
      case "firstName":
        this.setState(() => ({ firstName: value }));
        break;
      case "lastName":
        this.setState(() => ({ lastName: value }));
        break;
      case "company":
        this.setState(() => ({ company: value }));
        break;
      case "address":
        this.setState(() => ({ address: value }));
        break;
      case "apartment":
        this.setState(() => ({ apartment: value }));
        break;
      case "city":
        this.setState(() => ({ city: value }));
        break;
      case "country":
        this.setState(() => ({ country: value }));
        break;
      case "state":
        this.setState(() => ({ state: value }));
        break;
      case "zip":
        this.setState(() => ({ zip: value }));
        break;
      case "phone":
        this.setState(() => ({ phone: value }));
        break;
    }
  };

  creditCardOnChange = e => {
    const value = e.value;
    const valid = e.valid;
    switch (e.getInputProps().name) {
      case "cc-number":
        const type = e.type;
        this.setState(() => ({
          cCNumber: value,
          cCNumberValid: valid,
          cCType: type
        }));
        break;
      case "cc-exp":
        const expirationValue = e.rawValue;
        this.setState(() => ({
          cCExpiration: expirationValue,
          cCExpirationValid: valid
        }));
        break;
      case "cvc":
        this.setState(() => ({
          cCCvc: value,
          cCCvcValid: valid
        }));
        break;
    }
  };

  inputOnChange = e => {
    const value = e.target.value;
    switch (e.target.name) {
      case "cardHolder":
        this.setState(() => ({
          cCHolder: value
        }));
        break;
    }
  };

  CreditCardformValidation = () => {
    if (validator.isEmpty(this.state.cCHolder)) {
      this.setState(() => ({
        cCHolderError: "Please enter your name as it appears on the card"
      }));
    } else {
      this.setState(() => ({
        cCHolderError: ""
      }));
    }

    if (!this.state.cCNumberValid) {
      this.setState(() => ({
        cCNumberError: "Please enter a valid credit card number"
      }));
    } else {
      this.setState(() => ({
        cCNumberError: ""
      }));
    }

    if (!this.state.cCExpirationValid) {
      this.setState(() => ({
        cCExpirationError: "Please enter a valid expiry date"
      }));
    } else {
      this.setState(() => ({
        cCExpirationError: ""
      }));
    }

    if (!this.state.cCCvcValid) {
      this.setState(() => ({
        cCCvcError: "Please enter the CVV"
      }));
    } else {
      this.setState(() => ({
        cCCvcError: ""
      }));
    }
  };

  billiingFormValidation = async () => {
    if (validator.isEmpty(this.state.firstName)) {
      this.setState(() => ({
        firstNameError: "Please enter your first name"
      }));
    } else {
      this.setState(() => ({
        firstNameError: ""
      }));
    }

    if (validator.isEmpty(this.state.lastName)) {
      this.setState(() => ({
        lastNameError: "Please enter your last name"
      }));
    } else {
      this.setState(() => ({
        lastNameError: ""
      }));
    }

    if (validator.isEmpty(this.state.address)) {
      this.setState(() => ({
        addressError: "Please enter your address"
      }));
    } else {
      this.setState(() => ({
        addressError: ""
      }));
    }

    if (validator.isEmpty(this.state.city)) {
      this.setState(() => ({
        cityError: "Please enter your city"
      }));
    } else {
      this.setState(() => ({
        cityError: ""
      }));
    }

    if (validator.isEmpty(this.state.zip)) {
      this.setState(() => ({
        zipError: "Please enter a valid zip / postal code for , United States"
      }));
    } else {
      this.setState(() => ({
        cityError: ""
      }));
    }

    if (
      validator.isEmpty(this.state.phone) ||
      !validator.isMobilePhone(this.state.phone, ["en-US"])
    ) {
      this.setState(() => ({
        phoneError: "Please enter a valid phone number"
      }));
    } else {
      this.setState(() => ({
        phoneError: ""
      }));
    }

    if (this.state.zip) {
      const validZipCode = await isValidZipCode(
        this.state.country,
        this.state.zip
      );

      if (!Object.keys(validZipCode).length > 0) {
        if (this._isMounted) {
          this.setState(() => ({
            zipError:
              "Please enter a valid zip / postal code for , United States"
          }));
        }
      } else if (this._isMounted) {
        this.setState(() => ({
          zipError: "",
          state: validZipCode.places[0]["state abbreviation"]
        }));
      }
    }

    return true;
  };

  onSubmit = e => {
    e.preventDefault();
    this.CreditCardformValidation();
    this.billiingFormValidation().then(response => {
      if (
        !this.state.emailError &&
        !this.state.firstNameError &&
        !this.state.lastNameError &&
        !this.state.addressError &&
        !this.state.cityError &&
        !this.state.zipError &&
        !this.state.phoneError &&
        !this.state.cCHolderError &&
        !this.state.cCNumberError &&
        !this.state.cCExpirationError &&
        !this.state.cCCvcError
      ) {
        this.props.onSubmit({
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          company: this.state.company,
          address: this.state.address,
          apartment: this.state.apartment,
          city: this.state.city,
          country: this.state.country,
          state: this.state.state,
          zip: this.state.zip,
          phone: this.state.phone,
          type: this.state.cCType,
          number: this.state.cCNumber,
          holderName: this.state.cCHolder,
          expiry: this.state.cCExpiration,
          cvv: this.state.cCCvc
        });
      }
    });
  };

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="c-form__section c-form__section--shipping-address-info">
          <div className="c-form__section-fieldset">
            <div className="c-field">
              <ShippingInfoPanel
                email={this.state.customerEmail}
                address={this.state.shippingAddress}
                apartment={this.state.shippingApartment}
                city={this.state.shippingCity}
                country={this.state.shippingCountry}
                state={this.state.shippingState}
                zip={this.state.shippingZip}
                shippingMethod={this.state.shippingMethod}
                shippingCost={this.state.shippingCost}
                backLink="/checkout/customer-information"
              />
            </div>
          </div>
        </div>

        <div className="c-form__section c-form__section--payment-method">
          <div className="c-form__section-header c-form__section-header--with-sub">
            Payment method
          </div>
          <div className="c-form__section-header-sub">
            All transactions are secure and encrypted.
          </div>

          {this.state.cCHolderError ||
          this.state.cCNumberError ||
          this.state.cCExpirationError ||
          this.state.cCCvcError ? (
            <div className="c-notification c-notification--error">
              <p className="c-notification__text c-notification__text--error">
                The information you provided couldn't be verified. Please check
                your card details and try again.
              </p>
            </div>
          ) : (
            ""
          )}

          <div className="c-form__section-fieldset">
            <div className="c-field">
              <div className="c-accordion">
                <div className="c-accordion__panel">
                  <input
                    className="c-accordion__input-radio"
                    type="radio"
                    name="paymentMethod"
                    id="creditCard"
                    value="creditCard"
                    onChange={this.onChange}
                    checked={this.state.paymentMethod === "creditCard"}
                  />
                  <label htmlFor="creditCard">
                    <span className="c-accordion__title">
                      <span className="c-accordion__title-text">
                        Credit card
                      </span>
                      <span className="c-accordion__title-info c-accordion__title-info--card-icons">
                        <CardTypeIconSelect cCType={this.state.cCType} />
                      </span>
                    </span>
                  </label>
                  <div className="c-accordion__content">
                    <div className="c-form__section c-form__section--credit-card">
                      <div className="c-form__section-fieldset">
                        <div className="c-field">
                          <Number
                            masked
                            onChange={this.creditCardOnChange}
                            render={({ value, valid, getInputProps }) => (
                              <CreditCardInputs
                                name="cc-number"
                                placeholder="Card number"
                                id="cc-number"
                                value={value}
                                valid={valid}
                                errorMessage={this.state.cCNumberError}
                                getInputProps={getInputProps}
                                inputFieldIconClass="c-field__input-icon"
                                iconClass="c-field__icon-holder--lock"
                              />
                            )}
                          />
                        </div>
                        <div className="c-field c-field--half">
                          <FormInputField
                            field="cardHolder"
                            inputType="text"
                            state={this.state.cCHolder}
                            error={this.state.cCHolderError}
                            label="Cardholder name"
                            onChange={this.inputOnChange}
                          />
                        </div>
                        <div className="c-field c-field--quarter">
                          <Expiration
                            onChange={this.creditCardOnChange}
                            render={({ getInputProps, rawValue, valid }) => (
                              <CreditCardInputs
                                name="cc-exp"
                                placeholder="MM / YY"
                                id="cc-exp"
                                value={rawValue}
                                valid={valid}
                                errorMessage={this.state.cCExpirationError}
                                getInputProps={getInputProps}
                              />
                            )}
                          />
                        </div>
                        <div className="c-field c-field--quarter">
                          <Cvc
                            onChange={this.creditCardOnChange}
                            render={({ getInputProps, valid, value }) => (
                              <CreditCardInputs
                                name="cvc"
                                placeholder="CVC"
                                id="cvc"
                                value={value}
                                valid={valid}
                                errorMessage={this.state.cCCvcError}
                                getInputProps={getInputProps}
                                inputFieldIconClass="c-field__input-icon"
                                iconClass="c-field__icon-holder--help"
                                tooltip="4-digit security code on the front of your card"
                              />
                            )}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="c-accordion__panel">
                  <input
                    className="c-accordion__input-radio"
                    type="radio"
                    name="paymentMethod"
                    id="amazonPay"
                    value="amazonPay"
                    onChange={this.onChange}
                    checked={this.state.paymentMethod === "amazonPay"}
                  />
                  <label
                    htmlFor="amazonPay"
                    className="c-accordion__label--title-image"
                  >
                    <span className="c-accordion__title">
                      <span className="c-accordion__title-image c-accordion__title-image--amazonpay" />
                    </span>
                  </label>
                  <div className="c-accordion__content">
                    <div className="c-accordion__content-blank">
                      <p className="c-accordion__content-blank-text">
                        You will be asked to login with Amazon.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="c-form__section c-form__section--billing-address">
          <div className="c-form__section-header">Billing address</div>

          <div className="c-form__section-fieldset">
            <div className="c-field">
              <div className="c-accordion">
                <div className="c-accordion__panel">
                  <input
                    className="c-accordion__input-radio"
                    type="radio"
                    name="billingAddress"
                    id="shippingAddress"
                    value="shippingAddress"
                    onChange={this.onChange}
                    checked={this.state.billingAddress === "shippingAddress"}
                  />
                  <label htmlFor="shippingAddress">
                    <span className="c-accordion__title">
                      <span className="c-accordion__title-text">
                        Same as shipping address
                      </span>
                    </span>
                  </label>
                </div>
                <div className="c-accordion__panel">
                  <input
                    className="c-accordion__input-radio"
                    type="radio"
                    name="billingAddress"
                    id="newBillingAddress"
                    value="newBillingAddress"
                    onChange={this.onChange}
                    checked={this.state.billingAddress === "newBillingAddress"}
                  />
                  <label htmlFor="newBillingAddress">
                    <span className="c-accordion__title">
                      <span className="c-accordion__title-text">
                        Use a different billing address
                      </span>
                    </span>
                  </label>
                  <div className="c-accordion__content">
                    <div className="c-form__section c-form__section--credit-card">
                      <div className="c-form__section-fieldset">
                        <div>
                          <div className="c-field c-field--half">
                            <FormInputField
                              field="firstName"
                              inputType="text"
                              state={this.state.firstName}
                              error={this.state.firstNameError}
                              label="First name"
                              onChange={this.onChange}
                            />
                          </div>
                          <div className="c-field c-field--half">
                            <FormInputField
                              field="lastName"
                              inputType="text"
                              state={this.state.lastName}
                              error={this.state.lastNameError}
                              label="Last name"
                              onChange={this.onChange}
                            />
                          </div>
                          <div className="c-field">
                            <FormInputField
                              field="company"
                              inputType="text"
                              state={this.state.company}
                              error={null}
                              label="Company (optional)"
                              onChange={this.onChange}
                            />
                          </div>
                          <div className="c-field">
                            <FormInputField
                              field="address"
                              inputType="text"
                              state={this.state.address}
                              error={this.state.addressError}
                              label="Address"
                              onChange={this.onChange}
                            />
                          </div>
                          <div className="c-field">
                            <FormInputField
                              field="apartment"
                              inputType="text"
                              state={this.state.apartment}
                              error={null}
                              label="Apartment, suite, etc. (optional)"
                              onChange={this.onChange}
                            />
                          </div>
                          <div className="c-field">
                            <FormInputField
                              field="city"
                              inputType="text"
                              state={this.state.city}
                              error={this.state.cityError}
                              label="City"
                              onChange={this.onChange}
                            />
                          </div>
                          <div className="c-field c-field--half">
                            <div className="c-field__input-wrapper c-field__input-wrapper--select">
                              <label
                                className={`c-field__label ${
                                  this.state.country
                                    ? "c-field__label--not-empty"
                                    : ""
                                }`}
                                htmlFor="country"
                              >
                                Country
                              </label>
                              <select
                                placeholder="Country"
                                className={`c-field__input ${
                                  this.state.country
                                    ? "c-field__input--not-empty"
                                    : ""
                                }`}
                                id="country"
                                name="country"
                                onChange={this.onChange}
                                value={this.state.country}
                              >
                                <option value="us">United States</option>
                                <option value="ca">Canada</option>
                              </select>
                            </div>
                          </div>
                          <div className="c-field c-field--half">
                            <FormInputField
                              field="zip"
                              inputType="number"
                              state={this.state.zip}
                              error={this.state.zipError}
                              label="Postalcode"
                              onChange={this.onChange}
                            />
                          </div>
                          <div className="c-field c-field">
                            <div className="c-field__input-wrapper">
                              <label
                                className={`c-field__label ${
                                  this.state.phone
                                    ? "c-field__label--not-empty"
                                    : ""
                                }`}
                                htmlFor="phone"
                              >
                                Phone
                              </label>

                              <InputMask
                                mask="(999) 999-9999"
                                maskChar={null}
                                className={`c-field__input ${
                                  this.state.phone
                                    ? "c-field__input--not-empty"
                                    : ""
                                }`}
                                value={this.state.phone}
                                id="phone"
                                name="phone"
                                placeholder="Phone"
                                onChange={this.onChange}
                              />
                              {this.state.phoneError && (
                                <span className="c-field__help-text c-field__help-text--error">
                                  {this.state.phoneError}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="c-field c-field">
              <div className="c-field__button-bottom c-field__button-bottom--order-complete">
                <Link
                  className="c-field__button-back"
                  to="/checkout/shipping-method"
                >
                  Return to shipping method
                </Link>

                <Button
                  type="submit-sm"
                  size="default"
                  ariaLabel="Continue to payment method"
                  text="Complete order"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default PaymentMethodForm;
