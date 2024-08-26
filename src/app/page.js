// import Image from 'next/image'
import connectDb from "@/utils/connectDb";

import GridLayout from "@/app/components/home/GridLayout";
// import Pagination from "@/app/components/product/Pagination";

const getProducts = async (searchParams) => {
	const searchQuery = new URLSearchParams({
		page: searchParams?.page || 1,
	}).toString();

	const res = await fetch(
		`http://localhost:3000/api/product?${searchQuery}`,
		// http://localhost:3000/api/product?page=2
		{
			method: "GET",
		},
	);
	if (!res.ok) {
		throw new Error("Failed to fetch products");
	}
	const data = await res.json();
	return data;
};
export default async function Home({ searchParams }) {
	console.log(searchParams, "from home page");
	await connectDb();
	const data = await getProducts(searchParams);
	console.log(data, "prdos");

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
			{/* <Pagination
				currentPage={currentPage}
				totalPages={totalPages}
				pathname={"/"}
			/> */}
		</main>
	);
}
