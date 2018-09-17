import React from "react";
import { connect } from "react-redux";
import Media from "react-media";
import { Redirect } from "react-router";
import PageHeader from "./PageHeader";
import OrderSummary from "./OrderSummary";
import PageFooter from "./PageFooter";
import ShippingMethodForm from "./forms/ShippingMethodForm";
import setSippingMethods from "../../actions/shippingMethods";

const ShippingMethod = props => {
  if (props.customerInfo.isComplete && props.shippingAddress.isComplete) {
    return (
      <React.Fragment>
        <section className="c-main">
          <div className="c-main__wrap">
            <PageHeader />
            <div className="c-main__content">
              <ShippingMethodForm
                shippingAddress={props.shippingAddress}
                customerInfo={props.customerInfo}
                onSubmit={({ shippingCost, shippingMethod }) => {
                  props.dispatch(
                    setSippingMethods({
                      shippingMethod,
                      shippingCost,
                      isComplete: true
                    })
                  );

                  props.history.push("/checkout/payment-method");
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
  customerInfo: state.customerInfo
});

export default connect(mapStateToProps)(ShippingMethod);
