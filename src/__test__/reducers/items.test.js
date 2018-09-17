import itemReducer from "../../reducers/items";
import items from "../fixtures/items";

test("should setup default item values", () => {
  const state = itemReducer(undefined, {});

  expect(state).toEqual([]);
});

test("should setup given item values", () => {
  const state = itemReducer(undefined, {
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

  expect(state).toEqual([
    {
      id: "234876",
      thumbnail: "http\\asetsimag.png",
      name: "Backpack",
      description: "Hylete 16L",
      price: 260,
      quantity: 1,
      currencyType: "$"
    }
  ]);
});

test("should remove item value for given id", () => {
  const state = itemReducer(items, {
    type: "REMOVE_ITEM",
    itemId: items[1].id
  });

  expect(state).toEqual([items[0], items[2]]);
});
