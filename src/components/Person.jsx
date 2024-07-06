/* eslint-disable react/prop-types */
import { Component } from "react";

export default class Person extends Component {
	render() {
		const { name, age } = this.props;
		return (
			<div>
				<h2>My Name is {name}</h2>
				<p>My Age is {age}</p>
			</div>
		);
	}
}
