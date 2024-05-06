import { useState } from "react";

import "./App.css";
import StudentForm from "./components/StudentForm";
import StudentSection from "./components/StudentSection";

function App() {
	const [studentName, setStudentName] = useState("");
	const [students, setStudents] = useState([]);
	const [editMode, setEditMode] = useState(false);
	const [editableStudent, setEditableStudent] = useState(null);

	// StudentForm(studentName, students)
	return (
		<div className="App">
			<StudentForm
				name={studentName}
				setStudentName={setStudentName}
				students={students}
				setStudents={setStudents}
				editMode={editMode}
				setEditMode={setEditMode}
				editableStudent={editableStudent}
				setEditableStudent={setEditableStudent}
			/>
			{/* <img src="" alt="" /> */}
			<StudentSection
				setStudentName={setStudentName}
				students={students}
				setStudents={setStudents}
				setEditMode={setEditMode}
				editableStudent={editableStudent}
				setEditableStudent={setEditableStudent}
			/>
		</div>
	);
}

export default App;

// const toggleList = (student) => {
// 	const updatedStudentList = students.map((item) => {
// 		if (item.id === student.id) {
// 			return { ...item, isPresent: !item.isPresent };
// 		}
// 		return item;
// 	});

// 	setStudents(updatedStudentList);
// };
