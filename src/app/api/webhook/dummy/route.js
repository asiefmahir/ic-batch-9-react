export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import connectDb from "@/utils/connectDb";
import Product from "@/models/product";
import Order from "@/models/order";
// import { currentUser } from "@/utils/currentUser";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
	await connectDb();
	const _raw = await req.text();
	const sig = req.headers.get("stripe-signature");
	// const user = await currentUser();

	try {
		// construct the event using stripe sdk
		const event = stripe.webhooks.constructEvent(
			_raw,
			sig,
			process.env.STRIPE_WEBHOOK_SECRET,
		);

		// handle the event

		// switch (event.type) {
		// if (event.type !== "charge.updated") {
		// 	console.log("Caught Ya!");
		// 	return NextResponse.json({ message: "WHy bro" });
		// 	// return;
		// }
		switch (event.type) {
			case "charge.updated": {
				console.log("triggered");
				const chargeSucceeded = event.data.object;
				const { id, ...rest } = chargeSucceeded;
				// console.log(event.data.object.receipt_url, "charge plz");

				const cartItems = JSON.parse(
					chargeSucceeded.metadata.cartItems,
				);
				const productIds = cartItems.map((item) => item._id);

				const products = await Product.find({
					_id: { $in: productIds },
				});

				// create an object to quickly map product details by id
				const productMap = {};

				products.forEach((product) => {
					productMap[product._id.toString()] = {
						_id: product._id,
						title: product.name,
						price: product.price,
						image: product.images?.secure_url || "",
					};
				});

				// create cartItems with product details
				const cartItemsWithProductDetails = cartItems.map(
					(cartItem) => ({
						...productMap[cartItem._id],
						quantity: cartItem.quantity,
					}),
				);

				// create order
				const orderData = {
					...rest,
					chargeId: id,
					payment_intent: chargeSucceeded.payment_intent,
					cartItems: cartItemsWithProductDetails,
					userId: event?.data?.object?.metadata?.userId,
					amount: event?.data?.amount || event?.data?.object?.amount,
				};
				console.log(orderData.cartItems, "orderData");

				await Order.create(orderData);
				break;
			}
			default:
				console.log(`Unhandled event type ${event.type}`);
		}
		return NextResponse.json({ ok: true });
	} catch (err) {
		console.log(err);
		return NextResponse.json({
			err: "Server error. Please try again",
			status: 500,
		});
	}
}
