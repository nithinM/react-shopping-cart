import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import CustomerInformation from "../components/checkout/CustomerInformation";
import ShippingMethod from "../components/checkout/ShippingMethod";
import PaymentMethod from "../components/checkout/PaymentMethod";

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route
        exact
        path="/"
        render={() => {
          console.log("here");
          return <Redirect to="/checkout/customer-information" />;
        }}
      />
      <Route
        path="/checkout/customer-information"
        component={CustomerInformation}
      />
      <Route path="/checkout/shipping-method" component={ShippingMethod} />
      <Route path="/checkout/payment-method" component={PaymentMethod} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
