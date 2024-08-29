"use client";

import { SessionProvider } from "next-auth/react";
import CartProvider from "./contexts/Cart";
import "./globals.css";
import Nav from "./components/Nav";
import "bootstrap-material-design/dist/css/bootstrap-material-design.min.css";

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<link
				rel="preload"
				href="bootstrap-material-design/dist/css/bootstrap-material-design.min.css"
				as="style"
			/>
			<body>
				<SessionProvider>
					<CartProvider>
						<Nav />
						{children}
					</CartProvider>
				</SessionProvider>
			</body>
		</html>
	);
}
