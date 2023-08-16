/* eslint-disable react-refresh/only-export-components */
import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
	name: "cart",
	initialState: {
		cart: [],
	},
	reducer: {
		addToCart: (state, action) => {
			const productPresent = state.cart.find(
				(product) => product.id === action.payload.id
			);
			if (productPresent) {
				productPresent.quantity++;
			} else {
				state.cart.push({ ...action.payload, quantity: 1 });
			}
		},
		removeFromCart: (state, action) => {
			const removeProduct = state.cart.filter(
				(product) => product.id !== action.payload
			);
			state.cart = removeProduct;
		},
		incrementQuantity: (state, action) => {
			const productPresent = state.cart.find(
				(product) => product.id === action.payload.id
			);
			productPresent.quantity++;
		},
		decrementQuantity: (state, action) => {
			const productPresent = state.cart.find(
				(product) => product.id === action.payload.id
			);
			if (productPresent.quantity === 1) {
				const removeProduct = state.cart.filter(
					(product) => product.id !== action.payload
				);
				state.cart = removeProduct;
			} else {
				productPresent.quantity--;
			}
		},
	},
});

export const {
	addToCart,
	removeFromCart,
	incrementQuantity,
	decrementQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
