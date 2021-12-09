import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    //total: 0,
  },
  reducers: {
    addItemCart: (state, action) => {
      const exist = state.products.find((x) => x.id === action.payload.id);
      if (exist) {
        exist.quantity = action.payload.quantity;
      }
      else {
        state.quantity += 1;
        state.products.push(action.payload);
        //state.total += action.payload.price * action.payload.quantity;
      }
    },
    addProduct: (state, action) => {
      const exist = state.products.find((x) => x.id === action.payload.id);
      if (exist) {
        exist.quantity++;
      }
      else {
        state.quantity += 1;
        state.products.push(action.payload);
        //state.total += action.payload.price * action.payload.quantity;
      }
    },
    delProduct: (state, action) => {
      const exist = state.products.find((x) => x.id === action.payload.id);
      if (exist.quantity === 1) {
        state.products = state.products.filter((x) => x.id !== exist.id);
        state.quantity -= 1;
      } else {
        exist.quantity--;
      }
    },
    ResetCart: (state) => {
      state.products= [];
      state.quantity= 0;
    },
  }
});

export const { addItemCart, addProduct, delProduct, ResetCart } = cartSlice.actions;
export default cartSlice.reducer;
