import { useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";

const UserList = () => {
	const {
		data: users,
		isLoading,
		errorMessage,
	} = useFetch([], `https://jsonplaceholder.typicode.com/users?_limit=5`);
	return (
		<div>
			<h1>User List</h1>
			{isLoading && <h2>Loading the users.......</h2>}
			{errorMessage && <p>{errorMessage}</p>}
			<ul>
				{users.map((user) => (
					<li key={user.id}>
						<strong>User name: </strong>
						{user.name}
					</li>
				))}
			</ul>
		</div>
	);
};

export default UserList;
