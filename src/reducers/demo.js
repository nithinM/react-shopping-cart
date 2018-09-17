import { createStore, combineReducers } from "redux";
import "../styles/app.scss";

// ADD_ITEM
const addItem = ({
  id = "",
  thumbnail = "",
  name = "",
  description = "",
  price = 0,
  quantity = 0,
  currency = "$"
} = {}) => ({
  type: "ADD_ITEM",
  orderItem: {
    id,
    thumbnail,
    name,
    description,
    price,
    quantity,
    currency
  }
});

// REMOVE_ITEM

const removeItem = itemId => ({
  type: "REMOVE_ITEM",
  itemId
});

// SET_CUSTOMER_INFO

const setCustomerInfo = ({
  email = "",
  keepMeUpdate = false,
  saveInfo = false
} = {}) => ({
  type: "SET_CUSTOMER_INFO",
  customerInfo: {
    email,
    keepMeUpdate,
    saveInfo
  }
});

// SET_SHIPPING_ADDRESS

const setShippingAddress = ({
  firstName = "",
  lastName = "",
  company = "",
  address = "",
  apartment = "",
  city = "",
  country = "",
  state = "",
  zip = "",
  phone = ""
} = {}) => ({
  type: "SET_SHIPPING_ADDRESS",
  shippingAddressInfo: {
    firstName,
    lastName,
    company,
    address,
    apartment,
    city,
    country,
    state,
    zip,
    phone
  }
});

// SET_BILLING_ADDRESS

const setBillingAddress = ({
  firstName = "",
  lastName = "",
  company = "",
  address = "",
  apartment = "",
  city = "",
  country = "",
  state = "",
  zip = "",
  phone = ""
} = {}) => ({
  type: "SET_BILLING_ADDRESS",
  billingAddressInfo: {
    firstName,
    lastName,
    company,
    address,
    apartment,
    city,
    country,
    state,
    zip,
    phone
  }
});

// SET_DISCOUNT

const setDiscount = ({ discountCode = "" } = {}) => ({
  type: "SET_DISCOUNT",
  discountCode
});

// SET_SHIPPING_METHOD

const setSippingMenthods = ({ shippingMethod = "free_shipping" } = {}) => ({
  type: "SET_SHIPPING_METHOD",
  shippingMethod
});

// SET_CARD_INFO

const setCardInfo = ({
  type = "",
  number = "",
  holderName = "",
  expiry = "",
  cvv = ""
} = {}) => ({
  type: "SET_CARD_INFO",
  cardInfo: {
    type,
    number,
    holderName,
    expiry,
    cvv
  }
});

// Item Reducer

const itemReducerReducerDefaultState = [];

const itemReducer = (state = itemReducerReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.orderItem];

    case "REMOVE_ITEM":
      return state.filter(({ id }) => id !== action.itemId);

    default:
      return state;
  }
};

// customerInfo Reducer

const customerInfoReducerDefaultState = {
  email: "",
  keepMeUpdate: false,
  saveInfo: false
};

const customerInfoReducer = (
  state = customerInfoReducerDefaultState,
  action
) => {
  switch (action.type) {
    case "SET_CUSTOMER_INFO":
      return { ...state, ...action.customerInfo };

    default:
      return state;
  }
};

// shoppingAddressReducer

const shoppingAddressReducerDefualtState = {
  firstName: "",
  lastName: "",
  company: "",
  address: "",
  apartment: "",
  city: "",
  country: "",
  state: "",
  zip: "",
  phone: ""
};

const shoppingAddressReducer = (
  state = shoppingAddressReducerDefualtState,
  action
) => {
  switch (action.type) {
    case "SET_SHIPPING_ADDRESS":
      return { ...state, ...action.shippingAddressInfo };

    default:
      return state;
  }
};

// billingAddress Reducer

const billingAddressReducerDefaultState = {
  firstName: "",
  lastName: "",
  company: "",
  address: "",
  apartment: "",
  city: "",
  country: "",
  state: "",
  zip: "",
  phone: ""
};

const billingAddressReducer = (
  state = billingAddressReducerDefaultState,
  action
) => {
  switch (action.type) {
    case "SET_BILLING_ADDRESS":
      return { ...state, ...action.billingAddressInfo };
    default:
      return state;
  }
};

// shippingMethod Reducer

const shippingMethodRefucerDefaultState = [];

const shippingMethodRreducer = (
  state = shippingMethodRefucerDefaultState,
  action
) => {
  switch (action.type) {
    case "SET_SHIPPING_METHOD":
      return [action.shippingMethod];
    default:
      return state;
  }
};

// creditCardInfo Reducer

const creditCardInfoReducerDefaultState = {
  type: "",
  number: "",
  holderName: "",
  expiry: "",
  cvv: ""
};

const creditCardInfoReducer = (
  state = creditCardInfoReducerDefaultState,
  action
) => {
  switch (action.type) {
    case "SET_CARD_INFO":
      return { ...state, ...action.cardInfo };
    default:
      return state;
  }
};

// discountCode Reducer

const discountCodeReducerDefaultState = "";

const discountCodeReducer = (
  state = discountCodeReducerDefaultState,
  action
) => {
  switch (action.type) {
    case "SET_DISCOUNT":
      return action.discountCode;
    default:
      return state;
  }
};

// Store Creation

const store = createStore(
  combineReducers({
    orderItems: itemReducer,
    customerInfo: customerInfoReducer,
    shippingAddress: shoppingAddressReducer,
    shippingMethod: shippingMethodRreducer,
    billingAddress: billingAddressReducer,
    creditCardInfo: creditCardInfoReducer,
    discountCode: discountCodeReducer
  })
);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(
  addItem({
    id: "74014752784",
    thumbnail:
      "//cdn.shopify.com/s/files/1/0325/7933/products/backpack_2x_d056789b-dddd-44b7-999a-1bb4d449d497_small.png?14732643653801229898",
    name: "The Boosted Backpack",
    description: "North America",
    price: 239.0,
    quantity: 1,
    currencyType: "$"
  })
);

store.dispatch(
  addItem({
    id: "772231528568",
    thumbnail:
      "//cdn.shopify.com/s/files/1/0325/7933/products/boosted-triple-8-mips-helmet-side-transparent-no-shadow_small.png?14732643653801229898",
    name: "Boosted x Triple 8 Gotham MIPS Helmet",
    description: "XS/S (18.9 – 21.3 in) / Ships in 1-2 business days",
    price: 99.99,
    quantity: 1,
    currencyType: "$"
  })
);

store.dispatch(removeItem("74014752784"));

store.dispatch(
  setCustomerInfo({
    email: "nithin@axis.lk",
    keepMeUpdate: false,
    saveInfo: true
  })
);

store.dispatch(
  setCustomerInfo({
    email: "nithin@axis.com"
  })
);

store.dispatch(
  setShippingAddress({
    firstName: "Nithin",
    lastName: "Madhuranga",
    company: "axis.lk",
    address: "54 Kepuela lane, Bogahawatta",
    apartment: "",
    city: "Ambalangoda",
    country: "Sri Lanka",
    state: "",
    zip: "80300",
    phone: "+94772321911"
  })
);

store.dispatch(setDiscount());

store.dispatch(setDiscount({ discountCode: "10OFF" }));

store.dispatch(setDiscount());

store.dispatch(setSippingMenthods());

store.dispatch(setSippingMenthods({ shippingMethod: "Air mail" }));

store.dispatch(setSippingMenthods());

store.dispatch(
  setCardInfo({
    type: "visa",
    number: "4566233312118900",
    holderName: "Nithin Madhuranga",
    expiry: "08/19",
    cvv: "969"
  })
);

const chekoutState = {
  orderItems: [
    {
      id: "74014752784",
      thumbnail:
        "//cdn.shopify.com/s/files/1/0325/7933/products/backpack_2x_d056789b-dddd-44b7-999a-1bb4d449d497_small.png?14732643653801229898",
      name: "The Boosted Backpack",
      description: "North America",
      price: 23900,
      quantity: 1
    }
  ],
  customerInfo: {
    email: "",
    keepMeUpdate: false,
    saveInfo: false
  },
  shippingAddress: {
    firstName: "",
    lastName: "",
    company: "",
    address: "",
    apartment: "",
    city: "",
    country: "",
    state: "",
    zip: "",
    phone: ""
  },
  billingAddress: {
    firstName: "",
    lastName: "",
    company: "",
    address: "",
    apartment: "",
    city: "",
    country: "",
    state: "",
    zip: "",
    phone: ""
  },
  shippingMethod: [],
  creditCardInfo: {
    type: "",
    number: "",
    holderName: "",
    expiry: "",
    cvv: ""
  },
  discountCode: []
};
