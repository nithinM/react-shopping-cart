import React from "react";
import { connect } from "react-redux";
import Media from "react-media";
import { Redirect } from "react-router";
import PageHeader from "./PageHeader";
import OrderSummary from "./OrderSummary";
import PageFooter from "./PageFooter";
import PaymentMethodForm from "./forms/PaymentMethodForm";
import setBillingAddress from "../../actions/billingAddress";
import setCardInfo from "../../actions/creditCard";

const PaymentMethod = props => {
  if (
    props.customerInfo.isComplete &&
    props.shippingAddress.isComplete &&
    props.shippingMethod.isComplete
  ) {
    return (
      <React.Fragment>
        <section className="c-main">
          <div className="c-main__wrap">
            <PageHeader />
            <div className="c-main__content">
              <PaymentMethodForm
                shippingAddress={props.shippingAddress}
                customerInfo={props.customerInfo}
                shippingMethod={props.shippingMethod}
                onSubmit={({
                  firstName,
                  lastName,
                  company,
                  address,
                  apartment,
                  city,
                  country,
                  zip,
                  phone,
                  number,
                  holderName,
                  expiry,
                  cvv,
                  type
                }) => {
                  props.dispatch(
                    setBillingAddress({
                      firstName,
                      lastName,
                      company,
                      address,
                      apartment,
                      city,
                      country,
                      zip,
                      phone,
                      isComplete: true
                    })
                  );

                  props.dispatch(
                    setCardInfo({
                      number,
                      holderName,
                      expiry,
                      cvv,
                      type,
                      isComplete: true
                    })
                  );

                  // props.history.push("/checkout/payment-method");
                }}
              />
            </div>
            <PageFooter />
          </div>
        </section>
        <Media
          query="(min-width: 1000px)"
          render={() => (
            <aside className="c-sidebar">
              <div className="c-sidebar__wrap">
                <OrderSummary />
              </div>
            </aside>
          )}
        />
      </React.Fragment>
    );
  }
  return <Redirect to="/checkout/customer-information" />;
};

const mapStateToProps = state => ({
  shippingAddress: state.shippingAddress,
  customerInfo: state.customerInfo,
  shippingMethod: state.shippingMethod
});

export default connect(mapStateToProps)(PaymentMethod);
