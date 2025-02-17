export const cartReducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.payload // ✅ Fix: Update products
      };
    default:
      return state;
  }
};
