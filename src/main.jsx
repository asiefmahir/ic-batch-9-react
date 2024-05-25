import ReactDOM from "react-dom/client";
// import App from "./App.jsx";

import { RouterProvider } from "react-router-dom";
import { rootRouter } from "./router/router.jsx";

import CartProvider from "./contexts/Cart.jsx";

import "./index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<CartProvider>
		<RouterProvider router={rootRouter} />
	</CartProvider>,
);
