/* eslint-disable react/prop-types */
const PresentStudentList = (props) => {
	return (
		<div className="list present-list">
			<h2>Present Students</h2>
			{props.students
				.filter((student) => student.isPresent === true)
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

export default PresentStudentList;
