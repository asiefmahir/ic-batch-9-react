/* eslint-disable react/prop-types */
import ProductRow from "./ProductRow";

const ProductList = ({ products }) => {
	return (
		<tbody>
			{products?.length !== 0 &&
				products?.map((item) => (
					<ProductRow key={item.id} item={item} />
				))}
		</tbody>
	);
};

export default ProductList;
