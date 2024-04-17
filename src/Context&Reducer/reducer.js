export const initialState = {
  basket: [],
};
export const total = (basket) => {
  return basket.reduce((amount, item) => amount + item.price, 0);
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "addtocart":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "removefromcart":
      const index = state.basket.findIndex(
        (item) => item.id === action.item.id
      );
      console.log(index);
      let newbasket = [...state.basket];
      console.log(newbasket);
      if (index >= 0) {
        newbasket.splice(index, 1);
      } else {
        console.log("cannot remove from cart");
      }
      return {
        ...state,
        basket: newbasket,
      };
    default:
      return state;
  }
};
