import { Component } from "react";
import Person from "../components/Person";
import CounterAppWithClass from "../components/CounterAppWithClass";
import AllPostWithClass from "./AllPostWithClass";
import AllUsersWithClass from "./AllUsers";

class ClassComponentExample extends Component {
	render() {
		return (
			<div>
				<h2>Hello Class Component</h2>
				<Person name={"Mahir"} age={26} />
				<hr />
				<CounterAppWithClass />
				<hr />
				<AllPostWithClass num1={10} />
				<hr />
				<AllUsersWithClass />
			</div>
		);
	}
}

export default ClassComponentExample;
