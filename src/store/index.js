// import { createStore, combineReducers, applyMiddleware } from "redux";
// import { counterReducer } from "./reducers/counter";
// import { cartReducer } from "./reducers/cart";
// import { postReducer } from "./reducers/post";
// import { userReducer } from "./reducers/user";
// import { composeWithDevTools } from "@redux-devtools/extension";

// import { thunk } from "redux-thunk";

// const rootReducer = combineReducers({
// 	counter: counterReducer,
// 	cart: cartReducer,
// 	post: postReducer,
// 	user: userReducer,
// });

// export const ourStore = createStore(
// 	rootReducer,
// 	// applyMiddleware(ourMiddleWare),
// 	composeWithDevTools(applyMiddleware(thunk)),
// );

import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./reducers/counter";
import cartSlice from "./reducers/cart";
import { postReducer } from "./reducers/post";
import { userReducer } from "./reducers/user";
import { rootApi } from "./features/apiSlice";

const rootReducer = {
	cart: cartSlice.reducer,
	counter: counterReducer,
	post: postReducer,
	user: userReducer,
	[rootApi.reducerPath]: rootApi.reducer,
};

export const ourStore = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleWare) =>
		getDefaultMiddleWare().concat(rootApi.middleware),
});
