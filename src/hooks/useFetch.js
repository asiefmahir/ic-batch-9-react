import { useState, useEffect } from "react";

export const useFetch = (initialValue, url) => {
	// [], // user-list
	// parameters
	// null
	const [data, setData] = useState(initialValue); // useState([])
	const [isLoading, setIsLoading] = useState(true);
	const [errorMessage, setErrorMessage] = useState("");

	useEffect(() => {
		fetch(url) // user-list
			.then((res) => res.json())
			.then((result) => {
				setIsLoading(false);
				setErrorMessage("");
				setData(result);
			})
			.catch((err) => {
				setErrorMessage(err.message);
				setData(initialValue);
				setIsLoading(false);
			});
	}, []);

	return {
		data,
		isLoading,
		errorMessage,
	};
};

//  userList -> const {data, isLoading, errorMessage} = useFetch([], `https://jsonplaceholder.typicode.com/users?_limit=5`)

//  postDetails ->const {data, isLoading, errorMessage} = useFetch(null, `https://jsonplaceholder.typicode.com/posts/1`)

// useFetch(null); //
// useFetch([]);
// function add(a, b) {
// 	return a + b;
// }

// add(10, 20);
// add(100, 200);
