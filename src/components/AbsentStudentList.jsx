/* eslint-disable react/prop-types */
const AbsentStudentList = (props) => {
	return (
		<div className="list absent-list">
			<h2>Absent Students</h2>
			{props.students
				.filter((student) => student.isPresent === false)
				.map((student) => (
					<li className="list-item" key={student.id}>
						<span>{student.name}</span>
						<button onClick={() => props.toggleList(student)}>
							Accidentally Added
						</button>
					</li>
				))}
		</div>
	);
};

export default AbsentStudentList;
