import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useCreateProduct } from "../hooks/server-states/products";

const initProduct = {
	title: "",
	description: "",
	price: "",
	image: "",
};

const AddProduct = () => {
	const [product, setProduct] = useState(initProduct);

	const createMutation = useCreateProduct();

	const handleChange = (e) => {
		console.log(e.target.name);
		setProduct({ ...product, [e.target.name]: e.target.value });
		// setProduct({...product, })
	};

	const submitHandler = (e) => {
		e.preventDefault();
		createMutation.mutate(product);
		setProduct(initProduct);
		// useCreateProductMutation()
	};

	return (
		<>
			<form
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
				}}
				onSubmit={submitHandler}
			>
				<p>Title</p>
				<input
					value={product.title}
					type="text"
					name="title"
					required
					style={{ display: "block", width: "70%" }}
					onChange={handleChange}
				/>
				<br />
				<p>Description</p>
				<input
					value={product.description}
					type="text"
					name="description"
					required
					style={{ display: "block", width: "70%" }}
					onChange={handleChange}
				/>
				<br />
				<p>Price</p>
				<input
					value={product.price}
					type="number"
					name="price"
					required
					style={{ display: "block", width: "70%" }}
					onChange={handleChange}
				/>
				<br />
				<p>Image</p>
				<input
					value={product.image}
					type="text"
					name="image"
					required
					style={{ display: "block", width: "70%" }}
					onChange={handleChange}
				/>
				<input type="submit" />
			</form>
		</>
	);
};

export default AddProduct;
