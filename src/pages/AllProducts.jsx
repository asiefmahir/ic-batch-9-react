import ProductList from "../components/ProductList";

import { useSelector } from "react-redux";

const AllProducts = () => {
	const { products } = useSelector((storeState) => storeState.product);
	return (
		<main>
			<div>
				<div className="product-section">
					<div className="product-section__heading">
						<h4>Product list in your app</h4>
					</div>
					<div className="product-table-container">
						<table>
							<ProductList products={products} />
						</table>
					</div>
				</div>
			</div>
		</main>
	);
};

export default AllProducts;
