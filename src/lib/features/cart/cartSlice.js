import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const index = state.value.findIndex((i) => i.id === action.payload.id);
      if (index < 0) {
        state.value.push({ ...action.payload, quantity: 1 });
      } else {
        state.value[index].quantity += 1;
      }
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
    removeFromCart: (state, action) => {
      state.value = state.value.filter((i) => i.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
    decrementCart: (state, action) => {
      const index = state.value.findIndex((i) => i.id === action.payload.id);
      if (state.value[index].quantity > 1) {
        state.value[index].quantity -= 1;
      } else {
        state.value = state.value.filter((i) => i.id !== action.payload.id);
      }
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
    deleteAllCart: (state) => {
      state.value = [];
      localStorage.removeItem("cart");
    },
    defaultCart: (state, action) => {
      state.value = action.payload
    }
  },
});

export const { addToCart, removeFromCart, decrementCart, deleteAllCart, defaultCart } =
  cartSlice.actions;
export default cartSlice.reducer;