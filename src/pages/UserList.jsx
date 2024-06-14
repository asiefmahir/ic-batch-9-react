import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../store/api-services/user";

const UserList = () => {
	const { isLoading, users, errorMessage } = useSelector(
		(storeState) => storeState.user,
	);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchUsers);
	}, []);
	return (
		<div>
			<h1>User List</h1>
			{isLoading && <h2>Loading the users.......</h2>}
			{errorMessage && <p>{errorMessage}</p>}
			<ul>
				{users?.map((user) => (
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
