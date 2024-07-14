import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      state.items.push(item);
      state.totalQuantity += item.quantity;
      state.totalAmount += item.price * item.quantity;
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      const item = state.items.find(item => item.id === itemId);
      if (item) {
        state.totalQuantity -= item.quantity;
        state.totalAmount -= item.price * item.quantity;
        state.items = state.items.filter(item => item.id !== itemId);
      }
    },
    updateQuantity: (state, action) => {
      const { itemId, quantity } = action.payload;
      const item = state.items.find(item => item.id === itemId);
      if (item) {
        state.totalQuantity += quantity - item.quantity;
        state.totalAmount += (quantity - item.quantity) * item.price;
        item.quantity = quantity;
      }
    },
    setItems: (state, action) => {
      state.items = action.payload.map(item => ({ ...item, quantity: 1 }));
      state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
      state.totalAmount = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
    },
  },
});

export const { addItem, removeItem, updateQuantity, setItems } = cartSlice.actions;
export default cartSlice.reducer;
