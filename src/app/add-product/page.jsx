import { createProduct } from "../actions/product";

const AddProduct = () => {
	// const submitHandler = (e) => {
	// 	e.preventDefault();
	// 	setProduct(initProduct);
	// 	// useCreateProductMutation()
	// 	fetch(`http://localhost:4000/products`, {
	// 		method: "POST",
	// 		body: JSON.stringify(product),
	// 		headers: {
	// 			"Content-type": "application/json",
	// 		},
	// 	}).then(() => {
	// 		fetch(`http://localhost:3000/api/product`);
	// 	});
	// };

	return (
		<>
			<form
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
				}}
				action={createProduct}
			>
				<p>Title</p>
				<input
					type="text"
					name="title"
					required
					style={{ display: "block", width: "70%" }}
				/>
				<br />
				<p>Description</p>
				<input
					type="text"
					name="description"
					required
					style={{ display: "block", width: "70%" }}
				/>
				<br />
				<p>Price</p>
				<input
					type="number"
					name="price"
					required
					style={{ display: "block", width: "70%" }}
				/>
				<br />
				<p>Image</p>
				<input
					type="text"
					name="image"
					required
					style={{ display: "block", width: "70%" }}
				/>
				<input type="submit" />
			</form>
		</>
	);
};

export default AddProduct;
