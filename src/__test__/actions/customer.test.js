import setCustomerInfo from "../../actions/customer";

test("should setup add item action object with given values", () => {
  const action = setCustomerInfo({
    email: "nithin@axis.lk",
    keepMeUpdate: false,
    saveInfo: true,
    isComplete: true
  });

  expect(action).toEqual({
    type: "SET_CUSTOMER_INFO",
    customerInfo: {
      email: "nithin@axis.lk",
      keepMeUpdate: false,
      saveInfo: true,
      isComplete: true
    }
  });
});

test("should setup add item action object with defaut values", () => {
  const action = setCustomerInfo({
    email: "",
    keepMeUpdate: false,
    saveInfo: false,
    isComplete: false
  });

  expect(action).toEqual({
    type: "SET_CUSTOMER_INFO",
    customerInfo: {
      email: "",
      keepMeUpdate: false,
      saveInfo: false,
      isComplete: false
    }
  });
});
