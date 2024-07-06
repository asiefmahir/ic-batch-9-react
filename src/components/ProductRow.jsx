/* eslint-disable react/prop-types */
import { useEffect } from "react";

import { useRemoveProduct } from "../hooks/server-states/products";

function ProductRow({ item }) {
	const removeMutation = useRemoveProduct();

	const removeHandler = () => {
		removeMutation.mutate(item.id);
	};

	useEffect(() => {
		console.log("");
		return () => {
			console.log("I am unmounting");
		};
	}, []);
	return (
		<tr className="product-row d-flex justify-content-around align-items-center">
			<td>
				<img src={item.image} className="product-img" alt="" />
			</td>

			<td>
				<h2>{item.title}</h2>
			</td>
			<td>
				<h2>{item.price}</h2>
			</td>
			<td onClick={removeHandler}>x</td>
		</tr>
	);
}

export default ProductRow;
