import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import DummyPage from "../pages/DummyPage";
import PostList from "../pages/PostList";
import PostDetails from "../pages/PostDetails";
import RootLayout from "../pages/RootLayout";
import AboutLayout from "../components/AboutLayout";

export const rootRouter = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{ path: "/", index: true, element: <Home /> },
			{ path: "/posts", element: <PostList /> },
			{
				path: "/about",
				element: <AboutLayout />,
				children: [{ path: "/about", index: true, element: <About /> }],
			},

			{ path: "*", element: <DummyPage /> },
			{ path: "/posts/:id", element: <PostDetails /> },
		],
	},

	// "posts/1"
	// "posts/3"
]);

// function add(num1, num2) {
// 	return num1 + num2;
// }

// add(100, 200);
// add(50, 70);
