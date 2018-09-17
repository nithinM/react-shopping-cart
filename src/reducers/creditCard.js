// creditCardInfo Reducer

const creditCardInfoReducerDefaultState = {
  type: "",
  number: "",
  holderName: "",
  expiry: "",
  cvv: "",
  isComplete: false
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

export default creditCardInfoReducer;
