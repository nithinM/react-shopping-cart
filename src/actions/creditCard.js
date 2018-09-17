// SET_CARD_INFO
const setCardInfo = ({
  type = "",
  number = "",
  holderName = "",
  expiry = "",
  cvv = "",
  isComplete = false
} = {}) => ({
  type: "SET_CARD_INFO",
  cardInfo: {
    type,
    number,
    holderName,
    expiry,
    cvv,
    isComplete
  }
});

export default setCardInfo;
