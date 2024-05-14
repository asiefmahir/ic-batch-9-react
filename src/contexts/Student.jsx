/* eslint-disable no-fallthrough */
/* eslint-disable no-empty */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useReducer, useState } from "react";
import App from "../App";

export const StudentContext = createContext();

const initialState = {
	studentName: "",
	students: [],
	editMode: false,
	editableStudent: null,
};
const studentReducer = (state, action) => {
	// action -> {type: "CHANGE_BG_COLOR", payload: "green"}
	// state = {}
	switch (action.type) {
		case "CHANGE_STUDENT_NAME": {
			return {
				...state,
				studentName: action.payload,
			};
		}
		case "CREATE_STUDENT": {
			const newStudent = {
				id: Date.now() + "",
				name: state.studentName,
				isPresent: undefined,
			};

			return {
				...state,
				students: [...state.students, newStudent],
				studentName: "",
			};
		}
		case "REMOVE_STUDENT": {
			// students  = [{id: "1", name: "acsa", isPresent: undefined}, {id: "2", name: "acsa", isPresent: undefined}, {id: "3", name: "acsa", isPresent: undefined}]

			// payload = "3"
			return {
				...state,
				students: state.students.filter(
					(item) => item.id !== action.payload,
				),
				// () 	   => "1"     !==  "3"
				// ()      => "2"     !== "3"
				// ()      => "3"     !== "3"
			};
		}
		case "EDIT_STUDENT": {
			return {
				...state,
				editMode: true,
				editableStudent: action.payload,
				studentName: action.payload.name,
			};
		}
		case "UPDATE_STUDENT": {
			const updatedStudentList = state.students.map((student) => {
				if (student.id === state.editableStudent.id) {
					return { ...student, name: state.studentName };
				}
				return student;
			});

			return {
				...state,
				students: updatedStudentList,
				editMode: false,
				editableStudent: null,
				studentName: "",
			};
		}

		// dispatch({type: "UPDATE_PRESENT_STATUS", payload: {id: "3", isPresent: false}})
		// dispatch({type: "UPDATE_PRESENT_STATUS", payload: {id: "3", isPresent: true}})
		//
		case "UPDATE_PRESENT_STATUS": {
			const updatedStudentList = state.students.map((student) => {
				if (student.id === action.payload.id) {
					return { ...student, isPresent: action.payload.isPresent }; // !true === false !false === true
				}
				return student;
			});

			return {
				...state,
				students: updatedStudentList,
			};
		}

		default: {
			return state;
		}
	}
};

const StudentProvider = (props) => {
	const [studentStates, dispatch] = useReducer(studentReducer, initialState);

	// studentStates = {studentName, students, editMode, editableStudent}

	const submitHandler = (event) => {
		event.preventDefault();
		if (studentStates.studentName.trim() === "")
			return alert(`Please provide a valid name`);

		studentStates.editMode
			? dispatch({ type: "UPDATE_STUDENT" })
			: dispatch({ type: "CREATE_STUDENT" });
	};

	const ctxValue = {
		studentStates,
		dispatch,
		submitHandler,
	};
	return (
		<StudentContext.Provider value={ctxValue}>
			{props.children}
		</StudentContext.Provider>
	);
};

export default StudentProvider;
