import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
// import CounterApp from "./CounterApp";

const RootLayout = () => {
	// Outlet is a placeholder
	return (
		<>
			<Nav />
			<Outlet />
		</>
	);
};

export default RootLayout;

// function add(a, b) {
// 	return a + b;
// }

// add(10, 20);
// add("Mahir", "Asief");
