/* eslint-disable react/prop-types */

import { useContext } from "react";
import { StudentContext } from "../contexts/Student";

const PresentStudentList = () => {
	const { students, toggleList } = useContext(StudentContext);
	return (
		<div className="list present-list">
			<h2>Present Students</h2>
			{students
				.filter((student) => student.isPresent === true)
				.map((student) => (
					<li className="list-item" key={student.id}>
						<span>{student.name}</span>
						<button onClick={() => toggleList(student)}>
							Accidentally Added
						</button>
					</li>
				))}
		</div>
	);
};

export default PresentStudentList;
