import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { addItem } from "./actions/items";
import Checkout from "./containers/Checkout";
import "normalize.css";
import "./styles/app.scss";

const store = configureStore();

store.dispatch(
  addItem({
    id: "74014752784",
    thumbnail:
      "//cdn.shopify.com/s/files/1/0325/7933/products/backpack_2x_056c6580-da22-40a0-90ae-d08b269e17cf_small.png?7845472839487420036",
    name: "The Boosted Backpack",
    description: "North America",
    price: 23900,
    quantity: 1,
    currencyType: "$"
  })
);

store.dispatch(
  addItem({
    id: "772231528568",
    thumbnail:
      "//cdn.shopify.com/s/files/1/0325/7933/products/boosted-triple-8-mips-helmet-side_02892cfe-ceb8-4ac5-aac1-c3adb4438470_small.jpg?7845472839487420036",
    name: "Boosted x Triple 8 Gotham MIPS Helmet",
    description: "XS/S (18.9 – 21.3 in) / Ships in 1-2 business days",
    price: 9999,
    quantity: 1,
    currencyType: "$"
  })
);

console.log(store.getState());

const jsx = (
  <Provider store={store}>
    <Checkout />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("boostedboards-app"));
