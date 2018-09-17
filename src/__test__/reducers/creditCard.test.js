import creditCardInfoReducer from "../../reducers/creditCard";

test("should setup default credit card values", () => {
  const state = creditCardInfoReducer(undefined, {});

  expect(state).toEqual({
    type: "",
    number: "",
    holderName: "",
    expiry: "",
    cvv: "",
    isComplete: false
  });
});

test("should set given value to credit card", () => {
  const state = creditCardInfoReducer(undefined, {
    type: "SET_CARD_INFO",
    cardInfo: {
      type: "Discover",
      number: "6011111111111117",
      holderName: "Nithin Madhuranga",
      expiry: "11/21",
      cvv: "345",
      isComplete: true
    }
  });

  expect(state).toEqual({
    type: "Discover",
    number: "6011111111111117",
    holderName: "Nithin Madhuranga",
    expiry: "11/21",
    cvv: "345",
    isComplete: true
  });
});
