import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

const RootLayout = () => {
	return (
		<>
			<Nav />
			<Outlet />
			<h3>sasds</h3>
		</>
	);
};

export default RootLayout;
