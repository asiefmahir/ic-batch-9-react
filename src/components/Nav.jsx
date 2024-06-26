import { Link } from "react-router-dom";

function Nav() {
	return (
		<header className="header">
			<div className="container">
				<nav className="header__navbar">
					<ul>
						<li>
							<Link to="/">Shop</Link>
						</li>
						<li>
							<Link to="/cart">Cart</Link>
						</li>
						<li>
							<Link to="/posts">PostList</Link>
						</li>
						<li>
							<Link to="/all-notes">Note List</Link>
						</li>
						<li>
							<Link to="/counter-app-1">Counter App</Link>
						</li>

						<li>
							<Link to="/add-product">Add a Product</Link>
						</li>
						<li>
							<Link to="/all-products">All Products</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Nav;
