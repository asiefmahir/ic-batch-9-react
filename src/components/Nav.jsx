import { Link } from "react-router-dom";

const Nav = () => {
	return (
		<div>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/posts">PostList</Link>
				</li>
				<li>
					<Link to="/team">Team</Link>
				</li>
			</ul>
		</div>
	);
};

export default Nav;
