export const cartReducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.payload // ✅ Fix: Update products
      };
    case "ADD_TO_CART":
      return {
        ...state , cart : [...state.cart, {...action.payload, qty : 1} ]
      };
    case "REMOVE_FROM_CART":
        return {
          ...state , cart : state.cart.filter((c)=> c.id !== action.payload.id),
        };
    case "CHANGE_CART_QTY":
      return { ...state, cart: state.cart.filter((c)=>c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty),
      };
    default:
      return state;
  }
};

export const productReducer  = (productState, action)=>{
  switch(action.type){
    case "SORT_BY_PRICE":
      return {...productState , price : action.payload }
    case "FILTER_BY_SEARCH":
      return {...productState , searchQuery : action.payload || ""}
    case "CLEAR_FILTERS":
      return {
        ...productState,
        price : 0,
        searchQuery : ""
      }
  
  default :
  return productState ;
  }
};

