import React from "react";
import { connect } from "react-redux";
import Media from "react-media";
import setCustomerInfo from "../../actions/customer";
import setShippingAddress from "../../actions/shippingAddress";
import PageHeader from "./PageHeader";
import OrderSummary from "./OrderSummary";
import CustomerInfoForm from "./forms/CustomerInfoForm";
import AlternativePayment from "./AlternativePayment";
import PageFooter from "./PageFooter";

const CustomerInformation = props => (
  <React.Fragment>
    <section className="c-main">
      <div className="c-main__wrap">
        <PageHeader />
        <div className="c-main__content">
          <AlternativePayment />
          <CustomerInfoForm
            shippingAddress={props.shippingAddress}
            customerInfo={props.customerInfo}
            onSubmit={({
              email,
              keepMeUpdate,
              firstName,
              lastName,
              company,
              address,
              apartment,
              city,
              country,
              state,
              zip,
              phone,
              saveInfo
            }) => {
              props.dispatch(
                setCustomerInfo({
                  email,
                  keepMeUpdate,
                  saveInfo,
                  isComplete: true
                })
              );

              props.dispatch(
                setShippingAddress({
                  firstName,
                  lastName,
                  company,
                  address,
                  apartment,
                  city,
                  country,
                  state,
                  zip,
                  phone,
                  isComplete: true
                })
              );

              props.history.push("/checkout/shipping-method");
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

const mapStateToProps = state => ({
  shippingAddress: state.shippingAddress,
  customerInfo: state.customerInfo
});

export default connect(mapStateToProps)(CustomerInformation);
