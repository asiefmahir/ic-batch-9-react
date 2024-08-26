import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/user";
import bcrypt from "bcrypt";
import connectDb from "./connectDb";

export const authOptions = {
	session: {
		strategy: "jwt",
	},
	providers: [
		CredentialsProvider({
			async authorize(credentials, req) {
				await connectDb();
				const { email, password } = credentials;
				// console.log(email, "cred");

				const user = await User.findOne({ email: email });

				if (!user) {
					throw new Error("Invalid email or Password");
				}

				const isMatch = await bcrypt.compare(password, user.password);
				if (!isMatch) {
					throw new Error("Invalid email or Password");
				}

				return user;
			},
		}),
	],
	callbacks: {
		async signIn({ user }) {
			// console.log(user, "userFromSignIn");

			// const { email } = user;
			// await connectDb();

			// let dbUser = await User.findOne({ email });

			if (user) {
				return true;
			}
		},
		jwt: async ({ token, user }) => {
			// console.log(token.email, "emailInToken from jwt callback");
			await connectDb();
			const userByEmail = await User.findOne({ email: token.email });
			userByEmail.password = undefined;
			token.user = userByEmail;
			// token.abc = 10;
			return token;
		},
		session: async ({ session, token }) => {
			session.user = token.user;
			// console.log(session);

			return session;
		},
	},
	secret: process.env.NEXTAUTH_SECRET,
	pages: {
		signIn: "/login",
	},
};
