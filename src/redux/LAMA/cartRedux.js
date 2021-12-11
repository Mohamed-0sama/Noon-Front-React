import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quan: 0,
    //total: 0,
  },
  reducers: {
    addItemCart: (state, action) => {
      //console.log(action);
      const exist = state.products.find((x) => x._id === action.payload._id);
      if (exist) {
        exist.quan = action.payload.quan;
      }
      else {
        state.quan += 1;
        state.products.push(action.payload);
        //state.total += action.payload.price * action.payload.quan;
      }
    },
    addProduct: (state, action) => {
      const exist = state.products.find((x) => x._id === action.payload._id);
      if (exist) {
        exist.quan++;
      }
      else {
        state.quan += 1;
        state.products.push(action.payload);
        //state.total += action.payload.price * action.payload.quan;
      }
    },
    delProduct: (state, action) => {
      const exist = state.products.find((x) => x._id === action.payload._id);
      if (exist.quan === 1) {
        state.products = state.products.filter((x) => x._id !== exist._id);
        state.quan -= 1;
      } else {
        exist.quan--;
      }
    },
    ResetCart: (state) => {
      state.products= [];
      state.quan= 0;
    },
  }
});

export const { addItemCart, addProduct, delProduct, ResetCart } = cartSlice.actions;
export default cartSlice.reducer;
