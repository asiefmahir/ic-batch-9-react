import { NextResponse } from "next/server";
import connectDb from "@/utils/connectDb";
import Product from "@/models/product";
import queryString from "query-string";

// http://localhost:3000/api/product?page=2
export async function GET(req) {
	await connectDb();
	// 50 -> 31-40 31-40
	// 40 - 39 - 38 - 37 - 36 - 35 - 34 - 33 - 32 - 31 - 30
	const searchParams = queryString.parseUrl(req.url).query;
	const { page } = searchParams || {}; // 4
	const pageSize = 10;
	try {
		const currentPage = Number(page) || 1;
		//
		const skip = (currentPage - 1) * pageSize;
		// skip = 4-1 * 10 = 3 * 10 = 30
		const totalProducts = await Product.countDocuments({});

		const products = await Product.find({})
			.skip(skip)
			.limit(pageSize)
			.sort({ createdAt: -1 });
		// .populate("category", "title");
		// 45 / 10 - > 5

		return NextResponse.json({
			products,
			currentPage,
			totalPages: Math.ceil(totalProducts / pageSize),
		});
	} catch (err) {
		return NextResponse.json(
			{
				err: err.message,
			},
			{ status: 500 },
		);
	}
}
