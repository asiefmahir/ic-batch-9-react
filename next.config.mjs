/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "res.cloudinary.com",
			},
		],
	},
	env: {
		NEXT_PUBLIC_API: process.env.NEXT_PUBLIC_API,
	},
	// env: {
	// 	DB_URI: process.env.MONGODB_URI,
	// 	API: process.env.VERCEL_URL,
	// 	NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
	// 	CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
	// 	CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
	// 	CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
	// 	STRIPE_PUBLISHABLE_KEY: process.env.STRIPE_PUBLISHABLE_KEY,
	// 	STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
	// 	STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,
	// 	DOMAIN: process.env.VERCEL_URL,
	// },
	async headers() {
		return [
			{
				// matching all API routes
				source: "/api/:path*",
				headers: [
					{ key: "Access-Control-Allow-Credentials", value: "true" },
					{ key: "Access-Control-Allow-Origin", value: "*" },
					{
						key: "Access-Control-Allow-Methods",
						value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
					},
					{
						key: "Access-Control-Allow-Headers",
						value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
					},
				],
			},
		];
	},
};

export default nextConfig;
