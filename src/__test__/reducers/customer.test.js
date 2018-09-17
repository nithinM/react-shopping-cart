import customerInfoReducer from "../../reducers/customer";

test("should setup default customer values", () => {
  const state = customerInfoReducer(undefined, {});

  expect(state).toEqual({
    email: "",
    keepMeUpdate: false,
    saveInfo: false,
    isComplete: false
  });
});

test("should set given value to  customer", () => {
  const state = customerInfoReducer(undefined, {
    type: "SET_CUSTOMER_INFO",
    customerInfo: {
      email: "nithin@axis.lk",
      keepMeUpdate: false,
      saveInfo: true,
      isComplete: true
    }
  });

  expect(state).toEqual({
    email: "nithin@axis.lk",
    keepMeUpdate: false,
    saveInfo: true,
    isComplete: true
  });
});
