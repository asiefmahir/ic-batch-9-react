/* eslint-disable react/prop-types */

import { useContext } from "react";
import { StudentContext } from "../contexts/Student";

const PresentStudentList = () => {
	const { studentStates, dispatch } = useContext(StudentContext);
	return (
		<div className="list present-list">
			<h2>Present Students</h2>
			{studentStates.students
				.filter((student) => student.isPresent === true)
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

export default PresentStudentList;
