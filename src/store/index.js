import { createStore, combineReducers } from "redux";
import { counterReducer } from "./reducers/counter";
import { cartReducer } from "./reducers/cart";
import { composeWithDevTools } from "@redux-devtools/extension";

const rootReducer = combineReducers({
	counter: counterReducer,
	cart: cartReducer,
});

export const ourStore = createStore(rootReducer, composeWithDevTools());
