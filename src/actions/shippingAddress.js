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
  phone = "",
  isComplete = false
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
    phone,
    isComplete
  }
});

export default setShippingAddress;
