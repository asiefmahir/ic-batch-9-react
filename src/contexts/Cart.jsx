/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import { cartReducer } from "../reducers/cart";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
	const [cart, dispatch] = useReducer(cartReducer, []);

	return (
		<CartContext.Provider value={{ cart, dispatch }}>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;
