import setCardInfo from "../../actions/creditCard";

test("should setup add credit card action object with given values", () => {
  const action = setCardInfo({
    type: "Discover",
    number: "6011111111111117",
    holderName: "Nithin Madhuranga",
    expiry: "11/21",
    cvv: "345",
    isComplete: true
  });

  expect(action).toEqual({
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
});

test("should setup add credit card action object with default values", () => {
  const action = setCardInfo({
    type: "",
    number: "",
    holderName: "",
    expiry: "",
    cvv: "",
    isComplete: false
  });

  expect(action).toEqual({
    type: "SET_CARD_INFO",
    cardInfo: {
      type: "",
      number: "",
      holderName: "",
      expiry: "",
      cvv: "",
      isComplete: false
    }
  });
});
