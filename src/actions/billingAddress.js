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
  phone = "",
  isComplete = false
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
    phone,
    isComplete
  }
});

export default setBillingAddress;
