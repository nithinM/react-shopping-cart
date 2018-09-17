import { createStore, combineReducers } from "redux";
import itemReducer from "../reducers/items";
import customerInfoReducer from "../reducers/customer";
import shippingAddressReducer from "../reducers/shippingAddress";
import shippingMethodReducer from "../reducers/shippingMethod";
import billingAddressReducer from "../reducers/billingAddress";
import creditCardInfoReducer from "../reducers/creditCard";
import discountCodeReducer from "../reducers/discount";

// Store Creation
export default () => {
  const store = createStore(
    combineReducers({
      orderItems: itemReducer,
      customerInfo: customerInfoReducer,
      shippingAddress: shippingAddressReducer,
      shippingMethod: shippingMethodReducer,
      billingAddress: billingAddressReducer,
      creditCardInfo: creditCardInfoReducer,
      discountCode: discountCodeReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
