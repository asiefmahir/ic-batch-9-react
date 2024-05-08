/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useState } from "react";
import App from "../App";

export const StudentContext = createContext();

const StudentProvider = (props) => {
	// props.children = <App />
	const [studentName, setStudentName] = useState("");
	const [students, setStudents] = useState([]);
	const [editMode, setEditMode] = useState(false);
	const [editableStudent, setEditableStudent] = useState(null);
	// let data = { name: "mahir", age: 27 };

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
	const toggleList = (student) => {
		const updatedStudentList = students.map((item) => {
			if (item.id === student.id) {
				return { ...item, isPresent: !item.isPresent };
			}
			return item;
		});

		setStudents(updatedStudentList);
	};
	const editHandler = (student) => {
		setEditMode(true);
		setStudentName(student.name);
		setEditableStudent(student);
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

	const ctxValue = {
		setStudents,
		submitHandler,
		toggleList,
		studentName,
		setStudentName,
		students,
		editMode,
		setEditMode,
		setEditableStudent,
		editableStudent,
		removeHandler,
		editHandler,
		sendToAbsentList,
		sendToPresentList,
	};
	return (
		<StudentContext.Provider value={ctxValue}>
			{props.children}
		</StudentContext.Provider>
	);
};

export default StudentProvider;
