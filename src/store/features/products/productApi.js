import { rootApi } from "../api/apiSlice";

export const productApi = rootApi.injectEndpoints({
	endpoints: (builder) => ({
		getAllProducts: builder.query({
			query: () => `products`,
			providesTags: ["products"],
		}),

		createProduct: builder.mutation({
			query: (product) => ({
				url: `products`,
				method: "POST",
				body: product,
			}),
			invalidatesTags: ["products"],
		}),

		removeProduct: builder.mutation({
			query: (prodId) => ({
				url: `products/${prodId}`,
				method: "DELETE",
			}),
			invalidatesTags: ["products"],
		}),

		// http://localhost:3000/products
	}),
});

export const {
	useGetAllProductsQuery,
	useCreateProductMutation,
	useRemoveProductMutation,
} = productApi;
