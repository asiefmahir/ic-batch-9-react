import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export const useGetAllProducts = () => {
	const {
		isFetching,
		isError,
		error,
		data: products,
	} = useQuery({
		queryKey: ["products"],
		queryFn: () =>
			fetch(`http://localhost:3000/products`).then((res) => res.json()),
		refetchOnMount: false,
	});

	return {
		isFetching,
		isError,
		error,
		products,
	};
};

export const useCreateProduct = () => {
	const client = useQueryClient();

	const createMutation = useMutation({
		mutationFn: (obj) =>
			fetch(`http://localhost:3000/products`, {
				method: "POST",
				body: JSON.stringify(obj),
				headers: {
					"Content-type": "application/json",
				},
			}),
		onSuccess: () => {
			console.log("created successfully");
			client.invalidateQueries("products");
		},
	});

	return createMutation;
};

export const useRemoveProduct = () => {
	const client = useQueryClient();

	const removeMutation = useMutation({
		mutationFn: (id) =>
			fetch(`http://localhost:3000/products/${id}`, {
				method: "DELETE",
			}),
		onSuccess: () => {
			client.invalidateQueries("products");
		},
	});

	return removeMutation;
};
