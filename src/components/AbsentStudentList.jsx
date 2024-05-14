/* eslint-disable react/prop-types */

import { useContext } from "react";
import { StudentContext } from "../contexts/Student";

const AbsentStudentList = () => {
	const { studentStates, dispatch } = useContext(StudentContext);
	return (
		<div className="list absent-list">
			<h2>Absent Students</h2>
			{studentStates.students
				.filter((student) => student.isPresent === false)
				.map((student) => (
					<li className="list-item" key={student.id}>
						<span>{student.name}</span>
						<button
							onClick={() =>
								dispatch({
									type: "UPDATE_PRESENT_STATUS",
									payload: {
										id: student.id,
										isPresent: !student.isPresent,
									},
								})
							}
						>
							Accidentally Added
						</button>
					</li>
				))}
		</div>
	);
};

export default AbsentStudentList;
