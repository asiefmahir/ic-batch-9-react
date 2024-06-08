import ReactDOM from "react-dom/client";
// import App from "./App.jsx";

import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import { rootRouter } from "./router/router.jsx";

import { ourStore } from "./store/index.js";

import "./index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Provider store={ourStore}>
		<RouterProvider router={rootRouter} />
	</Provider>,
);
