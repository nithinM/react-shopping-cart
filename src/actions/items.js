// ADD_ITEM
export const addItem = ({
  id = "",
  thumbnail = "",
  name = "",
  description = "",
  price = 0,
  quantity = 0,
  currencyType = "$"
} = {}) => ({
  type: "ADD_ITEM",
  orderItem: {
    id,
    thumbnail,
    name,
    description,
    price,
    quantity,
    currencyType
  }
});

// REMOVE_ITEM
export const removeItem = itemId => ({
  type: "REMOVE_ITEM",
  itemId
});
