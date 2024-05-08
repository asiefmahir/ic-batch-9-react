/* eslint-disable react/prop-types */

import { useContext } from "react";
import { StudentContext } from "../contexts/Student";

const AbsentStudentList = () => {
	const { students, toggleList } = useContext(StudentContext);
	return (
		<div className="list absent-list">
			<h2>Absent Students</h2>
			{students
				.filter((student) => student.isPresent === false)
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

export default AbsentStudentList;
