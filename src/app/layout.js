"use client";

import { SessionProvider } from "next-auth/react";
import CartProvider from "./contexts/Cart";
import "./globals.css";
import Nav from "./components/Nav";

export default function RootLayout({ children }) {
	return (
		<html lang="en">
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
