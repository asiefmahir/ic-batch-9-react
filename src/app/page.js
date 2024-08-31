// import Image from 'next/image'
import connectDb from "@/utils/connectDb";

import GridLayout from "@/app/components/home/GridLayout";
import Pagination from "@/app/components/product/Pagination";

const getProducts = async (searchParams) => {
	const searchQuery = new URLSearchParams({
		page: searchParams?.page || 1,
	}).toString();
	// console.log(searchQuery, "sQueyr");

	const res = await fetch(`${process.env.API}/product?${searchQuery}`, {
		method: "GET",
		next: { revalidate: 1 },
	});
	if (!res.ok) {
		throw new Error("Failed to fetch products");
	}
	const data = await res.json();
	return {
		products: data?.products,
		currentPage: data?.currentPage,
		totalPages: data?.totalPages,
	};
};
export default async function Home({ searchParams }) {
	// console.log(searchParams, "from home page");
	await connectDb();
	const data = await getProducts(searchParams);
	// console.log(data, "prdos");

	return (
		<main>
			<div>
				<div className="page-banner">
					<div className="page-banner__details">
						<div className="page-banner__details__title">
							<h1>Our E-commerce Website</h1>
						</div>
					</div>
				</div>
				<div className="section">
					<div className="container">
						<div className="section__head">
							<div className="product__details__title">
								<h2>Filtered Products</h2>
							</div>
						</div>
						<div className="section__content">
							<GridLayout products={data?.products} />
						</div>
					</div>
				</div>
			</div>
			<Pagination
				currentPage={data?.currentPage}
				totalPages={data?.totalPages}
				pathname={"/"}
			/>
		</main>
	);
}
