import { addItem, removeItem } from "../../actions/items";

test("should setup remove item action object", () => {
  const action = removeItem("123456");

  expect(action).toEqual({
    type: "REMOVE_ITEM",
    itemId: "123456"
  });
});

test("should setup add item action object with given values", () => {
  const action = addItem({
    id: "234876",
    thumbnail: "http\\asetsimag.png",
    name: "Backpack",
    description: "Hylete 16L",
    price: 260,
    quantity: 1,
    currencyType: "$"
  });

  expect(action).toEqual({
    type: "ADD_ITEM",
    orderItem: {
      id: "234876",
      thumbnail: "http\\asetsimag.png",
      name: "Backpack",
      description: "Hylete 16L",
      price: 260,
      quantity: 1,
      currencyType: "$"
    }
  });
});

test("should setup add item action object with default values", () => {
  const action = addItem();

  expect(action).toEqual({
    type: "ADD_ITEM",
    orderItem: {
      id: "",
      thumbnail: "",
      name: "",
      description: "",
      price: 0,
      quantity: 0,
      currencyType: "$"
    }
  });
});
