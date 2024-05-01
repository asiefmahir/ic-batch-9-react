import { useState } from "react";

import "./App.css";

function App() {
	const [studentName, setStudentName] = useState("");
	const [students, setStudents] = useState([
		// { id: "1", name: "Mahir", isPresent: undefined },
		// { id: "10", name: "Asief", isPresent: undefined },
		// { id: "3", name: "Saikat Vau", isPresent: undefined },
		// { id: "100", name: "Nahid Vai", isPresent: undefined },
	]);
	// console.log(students.filter((student) => student.isPresent === true));

	// students[0].name = "asasa"
	const [editMode, setEditMode] = useState(false);
	const [editableStudent, setEditableStudent] = useState(null);

	// Derived State
	const presentList = students.filter(
		(student) => student.isPresent === true,
	);

	const absentList = students.filter(
		(student) => student.isPresent === false,
	);

	const submitHandler = (event) => {
		event.preventDefault();
		if (studentName.trim() === "")
			return alert(`Please provide a valid name`);

		editMode ? updateHandler() : createHandler();
	};

	const createHandler = () => {
		const newStudent = {
			id: Date.now() + "",
			name: studentName,
			isPresent: undefined,
		};
		// students.push(newStudent)
		setStudents([...students, newStudent]);
		setStudentName("");
	};
	const editHandler = (student) => {
		setEditMode(true);
		setStudentName(student.name);
		setEditableStudent(student);
	};

	const updateHandler = () => {
		const updatedStudentList = students.map((student) => {
			if (student.id === editableStudent.id) {
				return { ...student, name: studentName };
			}
			return student;
		});
		setStudents(updatedStudentList);
		// students = updatedStudentList
		setStudentName("");
		setEditMode(false);
		setEditableStudent(null);
	};

	const removeHandler = (studentId) => {
		const updatedStudentList = students.filter(
			(student) => student.id !== studentId,
		);

		setStudents(updatedStudentList);
	};

	const sendToPresentList = (student) => {
		if (student.isPresent !== undefined) {
			return alert(
				`The student is already in the ${
					student.isPresent === true ? "Present List" : "Absent"
				}`,
			);
		}
		// student.isPresent = true
		const updatedStudentList = students.map((item) => {
			if (item.id === student.id) {
				return { ...item, isPresent: true };
			}
			return item;
		});

		setStudents(updatedStudentList);
	};

	const sendToAbsentList = (student) => {
		if (student.isPresent !== undefined) {
			return alert(
				`The student is already in the ${
					student.isPresent === true ? "Present List" : "Absent List"
				}`,
			);
		}
		// student.isPresent = true
		const updatedStudentList = students.map((item) => {
			if (item.id === student.id) {
				return { ...item, isPresent: false };
			}
			return item;
		});

		setStudents(updatedStudentList);
	};

	const toggleList = (student) => {
		const updatedStudentList = students.map((item) => {
			if (item.id === student.id) {
				return { ...item, isPresent: !item.isPresent };
			}
			return item;
		});

		setStudents(updatedStudentList);
	};

	return (
		<div className="App">
			<form onSubmit={submitHandler} className="form">
				<input
					type="text"
					value={studentName}
					onChange={(e) => setStudentName(e.target.value)}
				/>
				<button type="submit">
					{editMode ? "Update Student" : "Create Student"}
				</button>
			</form>
			<div className="student-section">
				<div className="list all-list">
					<h2>All Students</h2>
					<ul>
						{students.map((student) => (
							<li className="list-item" key={student.id}>
								<span>{student.name}</span>
								<button onClick={() => editHandler(student)}>
									Edit
								</button>
								<button
									onClick={() => removeHandler(student.id)}
								>
									Remove
								</button>
								<button
									onClick={() => sendToPresentList(student)}
								>
									Send to Present List
								</button>
								<button
									onClick={() => sendToAbsentList(student)}
								>
									Send to Absent List
								</button>
							</li>
						))}
					</ul>
				</div>
				<div className="list present-list">
					<h2>Present Students</h2>
					{students
						.filter((student) => student.isPresent === true)
						.map((student) => (
							<li className="list-item" key={student.id}>
								<span>{student.name}</span>
								<button onClick={() => toggleList(student)}>
									Accidentally Added
								</button>
							</li>
						))}
				</div>
				<div className="list absent-list">
					<h2>Absent Students</h2>
					{absentList.map((student) => (
						<li className="list-item" key={student.id}>
							<span>{student.name}</span>
							<button onClick={() => toggleList(student)}>
								Accidentally Added
							</button>
						</li>
					))}
				</div>
			</div>
		</div>
	);
}

export default App;
