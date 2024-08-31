import { NextResponse } from "next/server";
import connectDb from "@/utils/connectDb";
import Order from "@/models/order";
import queryString from "query-string";

export async function GET(req) {
	await connectDb();
	const searchParams = queryString.parseUrl(req.url).query;
	const { page } = searchParams || {};
	const pageSize = 3;

	try {
		const currentPage = Number(page) || 1;
		const skip = (currentPage - 1) * pageSize;
		const totalOrders = await Order.countDocuments();
		// console.log(totalOrders, "tOrders");

		const orders = await Order.find({})
			.populate("userId")
			.skip(skip)
			.limit(pageSize)
			.sort({ createdAt: -1 });
		// console.log(orders);

		return NextResponse.json({
			orders,
			currentPage,
			totalPages: Math.ceil(totalOrders / pageSize),
		});
	} catch (err) {
		return NextResponse.json(err, { status: 500 });
	}
}
