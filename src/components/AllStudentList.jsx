/* eslint-disable react/prop-types */
const AllStudentList = (props) => {
	const {
		setStudentName,
		students,
		setStudents,
		setEditMode,
		setEditableStudent,
	} = props;
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
	return (
		<div className="list all-list">
			<h2>All Students</h2>
			<ul>
				{students.map((student) => (
					<li className="list-item" key={student.id}>
						<span>{student.name}</span>
						<button onClick={() => editHandler(student)}>
							Edit
						</button>
						<button onClick={() => removeHandler(student.id)}>
							Remove
						</button>
						<button onClick={() => sendToPresentList(student)}>
							Send to Present List
						</button>
						<button onClick={() => sendToAbsentList(student)}>
							Send to Absent List
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default AllStudentList;
