import Link from "next/link";

function Nav() {
	return (
		<header className="header">
			<div className="container">
				<nav className="header__navbar">
					<ul>
						<li>
							<Link href="/">Shop</Link>
						</li>
						<li>
							<Link href="/about">About</Link>
						</li>
						<li>
							<Link href="/posts">PostList</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Nav;
