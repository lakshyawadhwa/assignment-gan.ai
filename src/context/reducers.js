export const cartReducer = (state, action) => {
  const index = state.cart.findIndex(
    (product) => product.name === action.payload.name
  );
  switch (action.type) {
    case "ADD_TO_CART":
      if (index !== -1) {
        let product = state.cart[index];
        state.cart[index] = { ...product, quantity: product.quantity + 1 };
        return { ...state };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      }
    case "REMOVE_FROM_CART":
      return removeFromCart(state, action);

    case "REDUCE_FROM_CART":
      if (action.payload.quantity === 1) {
        return removeFromCart(state, action);
      } else {
        let product = state.cart[index];
        state.cart[index] = { ...product, quantity: product.quantity - 1 };
        return { ...state };
      }

    default:
      return state;
  }
};

const removeFromCart = (state, action) => {
  return {
    ...state,
    cart: state.cart.filter((product) => product.name !== action.payload.name),
  };
};
