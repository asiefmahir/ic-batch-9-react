import "./App.css";
import BioData from "./components/BioData";
import Greet from "./components/Dummy";

// const obj = {
// 	a: 10,
// 	b: 20
// };

// const {a} = obj

// BioData()

const bioDataInfos = [
	{
		id: Date.now() + "",
		name: "Mahir Asief",
		age: 27,
		email: "asiefmahir1@gmail.com",
		skills: ["React", "Redux", "NextJs", "NodeJs"],
		interests: ["System Design", "Chess", "Football"],
		socialLinks: [
			{ mediaName: "Fb", mediaAddress: "fb.com/asiefmahir" },
			{
				mediaName: "Github",
				mediaAddress: "github.com/asiefmahir",
			},
			{
				mediaName: "LinkedIn",
				mediaAddress: "linkedin.com/in/asiefmahir",
			},
		],
	},
	{
		id: Date.now() + "",
		name: "Sr Setu",
		age: 32,
		email: "srsetu@gmail.com",
		skills: ["React", "Redux", "NextJs", "WP", "PHP"],
		interests: ["System Design", "Chess", "Football", "Gaming"],
		socialLinks: [
			{ mediaName: "Fb", mediaAddress: "fb.com/srsetu" },
			{
				mediaName: "Github",
				mediaAddress: "github.com/srsetu",
			},
			{
				mediaName: "LinkedIn",
				mediaAddress: "linkedin.com/in/srsetu",
			},
			{
				mediaName: "X",
				mediaAddress: "x.com/srsetu",
			},
		],
	},
	{
		id: Date.now() + "",
		name: "Saikat Mohammad",
		age: 27,
		email: "sm@gmail.com",
		skills: ["React", "Redux", "NextJs", "NodeJs", "CSS"],
		interests: ["System Design", "Chess"],
		socialLinks: [
			{ mediaName: "Fb", mediaAddress: "fb.com/saikatMohammad" },
			{
				mediaName: "Github",
				mediaAddress: "github.com/saikatMohammad",
			},
			{
				mediaName: "LinkedIn",
				mediaAddress: "linkedin.com/in/saikatMohammad",
			},
		],
	},
];

function App() {
	return (
		<div className="App">
			<Greet name="G.R Salman" />
			{bioDataInfos.map((bioData) => (
				<BioData
					key={bioData.id}
					name={bioData.name}
					age={bioData.age}
					email={bioData.email}
					skills={bioData.skills}
					interests={bioData.interests}
					socialLinks={bioData.socialLinks}
				/>
			))}
		</div>
	);
}

// section, div

// App()

/**
 * 3 condition to be a component:
 *    1) A Component must be a function
 *    2) That function should return "something"
 *    3) That "something" should be some html-ish code (JSX)
 */

export default App;
