import ReactDOM from "react-dom/client";
// import App from "./App.jsx";

import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import { rootRouter } from "./router/router.jsx";

import { ourStore } from "./store/index.js";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

import "./index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<QueryClientProvider client={queryClient}>
		<ReactQueryDevtools initialIsOpen={false} />
		<Provider store={ourStore}>
			<RouterProvider router={rootRouter} />
		</Provider>
	</QueryClientProvider>,
);
