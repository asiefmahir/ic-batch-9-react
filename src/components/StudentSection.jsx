/* eslint-disable react/prop-types */
import AllStudentList from "./AllStudentList";
import PresentStudentList from "./PresentStudentList";
import AbsentStudentList from "./AbsentStudentList";

const StudentSection = (props) => {
	const {
		setStudentName,
		students,
		setStudents,
		setEditMode,
		setEditableStudent,
	} = props;
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
		<div className="student-section">
			<AllStudentList
				setStudentName={setStudentName}
				students={students}
				setStudents={setStudents}
				setEditMode={setEditMode}
				setEditableStudent={setEditableStudent}
			/>
			<PresentStudentList students={students} toggleList={toggleList} />
			<AbsentStudentList students={students} toggleList={toggleList} />
		</div>
	);
};

export default StudentSection;
