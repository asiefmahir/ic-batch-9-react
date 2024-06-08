/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";

const ProductCard = ({ product }) => {
	const dispatch = useDispatch();
	const addToCartHandler = () => {
		dispatch({ type: "ADD_TO_CART", payload: product });
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
