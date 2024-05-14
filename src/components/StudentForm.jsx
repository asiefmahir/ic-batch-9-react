import { useContext } from "react";
import { StudentContext } from "../contexts/Student";
/* eslint-disable react/prop-types */
const StudentForm = () => {
	const { studentStates, dispatch, submitHandler } =
		useContext(StudentContext);

	return (
		<form onSubmit={submitHandler} className="form">
			<input
				type="text"
				value={studentStates.studentName}
				onChange={(e) =>
					dispatch({
						type: "CHANGE_STUDENT_NAME",
						payload: e.target.value,
					})
				}
			/>
			<button type="submit">
				{studentStates.editMode ? "Update Student" : "Create Student"}
			</button>
		</form>
	);
};

export default StudentForm;
