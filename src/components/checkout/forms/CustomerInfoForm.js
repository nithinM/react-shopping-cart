import React from "react";
import { Link } from "react-router-dom";
import InputMask from "react-input-mask";
import validator from "validator";
import Button from "../../Button";
import FormInputField from "../../FormInputField";
import FormCheckbox from "../../FormCheckbox";
import { isValidZipCode } from "../../../util/customValidation";

class CustomerInfoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: props.customerInfo.email ? props.customerInfo.email : "",
      emailError: "",
      keepMeUpdate: props.customerInfo.keepMeUpdate
        ? props.customerInfo.keepMeUpdate
        : false,
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
      phoneError: "",
      saveInfo: props.customerInfo.saveInfo
        ? props.customerInfo.saveInfo
        : false
    };
    const _isMounted = false;
  }

  onChange = e => {
    const value = e.target.value;
    switch (e.target.name) {
      case "email":
        this.setState(() => ({ email: value }));
        break;
      case "keepMeUpdate":
        const checkedValueKeepMeUpdate = e.target.checked;
        this.setState(() => ({ keepMeUpdate: checkedValueKeepMeUpdate }));
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
      case "saveInfo":
        const checkedSaveInfoValue = e.target.checked;
        this.setState(() => ({ saveInfo: checkedSaveInfoValue }));
        break;
    }
  };

  formValidation = async () => {
    if (!validator.isEmail(this.state.email)) {
      this.setState(() => ({
        emailError: "Please enter a valid email address"
      }));
    } else {
      this.setState(() => ({
        emailError: ""
      }));
    }

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
    this.formValidation().then(response => {
      if (
        !this.state.emailError &&
        !this.state.firstNameError &&
        !this.state.lastNameError &&
        !this.state.addressError &&
        !this.state.cityError &&
        !this.state.zipError &&
        !this.state.phoneError
      ) {
        this.props.onSubmit({
          email: this.state.email,
          keepMeUpdate: this.state.keepMeUpdate,
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
          saveInfo: this.state.saveInfo
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
        <div className="c-form__section c-form__section--customer-info">
          <div className="c-form__section-header">Contact information</div>
          <div className="c-form__section-fieldset">
            <div className="c-field">
              <FormInputField
                field="email"
                inputType="email"
                state={this.state.email}
                error={this.state.emailError}
                label="Email"
                onChange={this.onChange}
              />
              <FormCheckbox
                field="keepMeUpdate"
                state={this.state.keepMeUpdate}
                error={null}
                label="Keep me up to date on news and exclusive offers"
                onChange={this.onChange}
              />
            </div>
          </div>
        </div>

        <div className="c-form__section c-form__section--shipping-address">
          <div className="c-form__section-header">Shipping address</div>
          <div className="c-form__section-fieldset">
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
                    this.state.country ? "c-field__label--not-empty" : ""
                  }`}
                  htmlFor="country"
                >
                  Country
                </label>
                <select
                  placeholder="Country"
                  className={`c-field__input ${
                    this.state.country ? "c-field__input--not-empty" : ""
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
                    this.state.phone ? "c-field__label--not-empty" : ""
                  }`}
                  htmlFor="phone"
                >
                  Phone
                </label>

                <InputMask
                  mask="(999) 999-9999"
                  maskChar={null}
                  className={`c-field__input ${
                    this.state.phone ? "c-field__input--not-empty" : ""
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
            <div className="c-field c-field">
              <FormCheckbox
                field="saveInfo"
                state={this.state.saveInfo}
                error={null}
                label="Save this information for next time"
                onChange={this.onChange}
                className="c-field__checkbox--bottom"
              />
            </div>

            <div className="c-field c-field">
              <div className="c-field__button-bottom">
                <Link className="c-field__button-back" to="/">
                  Return to cart
                </Link>
                <Button
                  type="submit-lg"
                  size="default"
                  ariaLabel="Continue to shipping method"
                  text="Continue to shipping method"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default CustomerInfoForm;
