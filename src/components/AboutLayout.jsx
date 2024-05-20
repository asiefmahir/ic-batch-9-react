import { Outlet } from "react-router-dom";

const AboutLayout = () => {
	return (
		<>
			<h3>About Layout</h3>
			<Outlet />
			<ul>
				<li>Dummy</li>
				<li>Dummy</li>
				<li>Dummy</li>
			</ul>
		</>
	);
};

export default AboutLayout;
