import { useContext } from "react";
import { StudentContext } from "../contexts/Student";
/* eslint-disable react/prop-types */
const StudentForm = () => {
	const { studentName, setStudentName, editMode, submitHandler } =
		useContext(StudentContext);

	return (
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
	);
};

export default StudentForm;
