import { Component } from "react";

export default class CounterAppWithClass extends Component {
	state = {
		counter: 10,
		noteTitle: "",
		notes: [],
	};

	increaseHandler = () => {
		const { counter } = this.state;
		this.setState({ ...this.state, counter: counter + 1 });
	};
	decreaseHandler = () => {
		const { counter } = this.state;
		this.setState({ ...this.state, counter: counter - 1 });
	};

	changeTitleHandler = (event) => {
		this.setState({ ...this.state, noteTitle: event.target.value });
	};

	submitHandler = (e) => {
		const { noteTitle, notes } = this.state;
		e.preventDefault();
		if (noteTitle.trim() === "") {
			return alert(`Please provide a valid title`);
		}

		const newNote = {
			id: Date.now() + "",
			title: noteTitle,
		};

		this.setState({
			...this.state,
			notes: [...notes, newNote],
			noteTitle: "",
		});
	};

	removeHandler = (noteId) => {
		const { notes } = this.state;

		const updatedNotes = notes.filter((item) => item.id !== noteId);
		this.setState({
			...this.state,
			notes: updatedNotes,
		});
	};

	render() {
		const { counter, noteTitle, notes } = this.state;
		return (
			<div>
				<p>The value of the counter is {counter}</p>
				<button onClick={this.increaseHandler}>Increase By 1</button>
				<button onClick={this.decreaseHandler}>Decrease By 1</button>
				<hr />
				<form onSubmit={this.submitHandler}>
					<input
						type="text"
						value={noteTitle}
						onChange={this.changeTitleHandler}
					/>
					<button type="submit">Add Note</button>
				</form>
				<br />
				<ul>
					{notes.map((note) => (
						<li key={note.id}>
							<span>{note.title}</span>
							<button onClick={() => this.removeHandler(note.id)}>
								Delete
							</button>
						</li>
					))}
				</ul>
			</div>
		);
	}
}
