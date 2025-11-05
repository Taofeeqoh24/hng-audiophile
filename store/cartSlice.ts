/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store';

// Define a type for the slice state
interface CartItem {
    id: number,
    image: string,
    name: string,
    count: number,
    price: number,
    quantity: number
}

interface CartState {
    cart: CartItem[];
}

// Define the initial state using that type
const initialState: CartState = {
    cart: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<any>) => {
            const existingItem = state.cart.find(item => item.id === action.payload.id);
            if (existingItem) {
                // Update quantity if item already exists
                existingItem.count += action.payload.count;
                existingItem.quantity += action.payload.quantity;
            } else {
                // Add new item
                state.cart.push({
                    ...action.payload,
                    count: Number(action.payload.count) || 1,
                    quantity: Number(action.payload.quantity) || 1,
                    price: Number(action.payload.price) || 0,
                });
            }
        },
        startNewCart: (state) => {
            state.cart = [];
        },
        updateQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
            const item = state.cart.find(item => item.id === action.payload.id);
            if (item) {
            item.quantity = action.payload.quantity;
            item.count = action.payload.quantity;
        }
    },
        clearCart: (state) => {
            state.cart = [];
        }
    },
});


export const { addToCart, startNewCart, clearCart, updateQuantity } = cartSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCart = (state: RootState) => state.cart.cart;

export const selectCartTotal = (state: RootState) => {
  const total = state.cart.cart.reduce((total, item) => {
    // Ensure both price and count are valid numbers
    const price = Number(item.price);
    const count = Number(item.count);

    if (isNaN(price) || isNaN(count)) {
      console.warn('Invalid cart item:', item);
      return total;
    }
    return total + (price * count);
  }, 0);
  
  return total;
};
export default cartSlice.reducer