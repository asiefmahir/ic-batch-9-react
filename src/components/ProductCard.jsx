/* eslint-disable react/prop-types */

import { useContext } from "react";
import { CartContext } from "../contexts/Cart";

const ProductCard = ({ product }) => {
	const { dispatch } = useContext(CartContext);
	const addToCartHandler = () => {
		dispatch({
			type: "ADD_TO_CART",
			payload: product,
		});
		alert(`${product.title} added to cart`);
	};
	return (
		<div className="ingredient">
			<div className="ingredient__image">
				<figure>
					<img src={product.image} alt={product.title} />
				</figure>
			</div>
			<div className="ingredient__title">
				<h3>{product.title}</h3>
			</div>
			<div className="ingredient__content">
				<p className="price">
					<span>${product.price}</span>
				</p>
			</div>
			<div className="ingredient__btn">
				<button onClick={addToCartHandler} className="btn-white">
					ADD TO CART
				</button>
			</div>
		</div>
	);
};

export default ProductCard;
