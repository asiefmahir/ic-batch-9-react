/* eslint-disable react/prop-types */
import AllStudentList from "./AllStudentList";
import PresentStudentList from "./PresentStudentList";
import AbsentStudentList from "./AbsentStudentList";

const StudentSection = () => {
	return (
		<div className="student-section">
			<AllStudentList />
			<PresentStudentList />
			<AbsentStudentList />
		</div>
	);
};

// const arr = [1, 2, 3, 4];

// const callback = (el) => el * 2;
// arr.map(callback);

export default StudentSection;
