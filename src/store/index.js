// import { createStore, combineReducers } from "redux";
// import { counterReducer } from "./reducers/counter";
// import { cartReducer } from "./reducers/cart";
// import { composeWithDevTools } from "@redux-devtools/extension";

// const rootReducer = combineReducers({
// 	counter: counterReducer,
// 	cart: cartReducer,
// });

// export const ourStore = createStore(rootReducer, composeWithDevTools());

import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./reducers/counter";
import cartSlice from "./reducers/cart";

const rootReducer = {
	cart: cartSlice.reducer,
	counter: counterReducer,
};

export const ourStore = configureStore({
	reducer: rootReducer,
});
