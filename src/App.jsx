import "./App.css";
import StudentForm from "./components/StudentForm";
import StudentSection from "./components/StudentSection";

function App() {
	return (
		<div className="App">
			<StudentForm />
			<StudentSection />
		</div>
	);
}

export default App;

// const toggleList = (student) => {
// 	const updatedStudentList = students.map((item) => {
// 		if (item.id === student.id) {
// 			return { ...item, isPresent: !item.isPresent };
// 		}
// 		return item;
// 	});

// 	setStudents(updatedStudentList);
// };
