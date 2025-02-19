export const cartReducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.payload // ✅ Fix: Update products
      };
    case "ADD TO CART":
      return {
        ...state , cart : [...state.cart, {...action.payload, qty : 1} ]
      }
    case "REMOVE TO CART":
        return {
          ...state , cart : state.cart.filter((c)=> c.id !== action.payload.id),
        }
    default:
      return state;
  }
};
