/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { removeProduct } from "../store/reducers/product";
function ProductRow({ item }) {
	const dispatch = useDispatch();

	const removeHandler = () => {
		dispatch(removeProduct(item.id));
	};
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
