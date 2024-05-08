/* eslint-disable react/prop-types */
import { useContext } from "react";
import { StudentContext } from "../contexts/Student";

const AllStudentList = () => {
	const {
		students,
		editHandler,
		removeHandler,
		sendToAbsentList,
		sendToPresentList,
	} = useContext(StudentContext);

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
