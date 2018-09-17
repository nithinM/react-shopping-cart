// SET_CUSTOMER_INFO
const setCustomerInfo = ({
  email = "",
  keepMeUpdate = false,
  saveInfo = false,
  isComplete = false
} = {}) => ({
  type: "SET_CUSTOMER_INFO",
  customerInfo: {
    email,
    keepMeUpdate,
    saveInfo,
    isComplete
  }
});

export default setCustomerInfo;
