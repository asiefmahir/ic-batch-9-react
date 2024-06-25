import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initState = {
	isLoading: true,
	errorMessage: "",
	products: [],
};

export const fetchProducts = createAsyncThunk(
	"products/fetchProducts",
	async () => {
		const response = await fetch(`http://localhost:3000/products`);
		const products = await response.json();
		return products;
	},
);

export const createProduct = createAsyncThunk(
	"products/createProduct",
	async (product) => {
		console.log(product);
		const response = await fetch(`http://localhost:3000/products`, {
			method: "POST",
			body: JSON.stringify(product),
			headers: {
				"Content-type": "application/json",
			},
		});
		const result = await response.json();

		return result;
	},
);

export const removeProduct = createAsyncThunk(
	"products/removeProduct",
	async (prodId) => {
		await fetch(`http://localhost:3000/products/${prodId}`, {
			method: "DELETE",
		});
		return prodId;
	},
);
// createProduct.pending
// createProduct.fulfilled
// createProduct.rejected
// fetchProducts.pending
// fetchProducts.fulfilled
// fetchProducts.rejected

const productSlice = createSlice({
	name: "product",
	initialState: initState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProducts.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.isLoading = false;
				state.errorMessage = "";
				state.products = action.payload;
			})
			.addCase(fetchProducts.rejected, (state, action) => {
				state.isLoading = false;
				state.products = [];
				state.errorMessage = action.error.message;
			})
			.addCase(createProduct.fulfilled, (state, action) => {
				state.products.push(action.payload);
			})
			.addCase(removeProduct.fulfilled, (state, action) => {
				state.products = state.products.filter(
					(item) => item.id !== action.payload,
				);
			});
	},
});

export default productSlice;
