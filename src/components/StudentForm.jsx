const StudentForm = (props) => {
	const {
		studentName,
		setStudentName,
		editMode,
		setStudents,
		students,
		editableStudent,
		setEditMode,
		setEditableStudent,
	} = props;

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
