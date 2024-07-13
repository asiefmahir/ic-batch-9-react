import "@/styles/globals.css";
import Nav from "@/components/Nav";

export default function App({ Component, pageProps }) {
	return (
		<>
			<Nav />
			<Component {...pageProps} />
			<footer>
				<ul>
					<li>Footer 1</li>
					<li>Footer 2</li>
				</ul>
			</footer>
			{/* <Outlet /> */}
		</>
	);
}
