// SET_DISCOUNT
const setDiscount = ({ discountCode = "" } = {}) => ({
  type: "SET_DISCOUNT",
  discountCode
});

export default setDiscount;
