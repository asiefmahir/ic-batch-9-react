/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { Component } from "react";
import { withFetch } from "../hoc/withFetch";

class AllUsersWithClass extends Component {
	// re render
	render() {
		console.log("render");
		const { isLoading, data: users, errorMessage } = this.props;
		return (
			<div>
				<h2>All users</h2>
				{isLoading && <h3>Loading....</h3>}
				{errorMessage && <p>{errorMessage}</p>}
				<ul>
					{users.map((user) => (
						<li key={user.id}>{user.name}</li>
					))}
				</ul>
			</div>
		);
	}
}

export default withFetch(
	"https://jsonplaceholder.typicode.com/users?_limit=5",
	[],
	AllUsersWithClass,
);
