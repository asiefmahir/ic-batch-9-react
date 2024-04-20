// named export
/**
 *
 * param = {
 *      name: "Mahir Asief",
 *      age: 27,
 *      email: "asiefmahir1@gmail.com",
 *      skills: ["React", "Redux", "NextJs", "NodeJs"],
 *      interests: ["System Design", "Chess"],
 *      socialLinks: [
 *          {mediaName: "Fb", mediaAddress: "FB.com/asiefmahir" },
 *          {mediaName: "GitHub", mediaAddress: "github.com/asiefmahir" },
 *          {mediaName: "LinkedIn", mediaAddress: "linked.com/asiefmahir" },
 *      ]
 * }
 *
 * param2 = {
 *      name: "SrSetu",
 *      age: 32,
 *      email: "srsetu@gmail.com",
 *      skills: ["React", "Redux", "NextJs", "WP", "PHP"],
 *      interests: ["System Design", "Chess", "Gaming"],
 *      socialLinks: [
 *          {mediaName: "Fb", mediaAddress: "FB.com/srsetu" },
 *          {mediaName: "GitHub", mediaAddress: "github.com/srsetu" },
 *          {mediaName: "LinkedIn", mediaAddress: "linked.com/srsetu" },
 *      ]
 * }
 */

// BioData(param);
// BioData(param2);

// const num1 = {
// 	age: 27,
// }
// `My age is ${num1.age}`
const BioData = (props) => {
	const { name, age, email, skills, interests, socialLinks } = props;
	// console.log(hello, "hello");
	return (
		<div className="bio-data">
			<div className="personal-info">
				<h2>Bio Data of {name}</h2>
				<p>
					<strong>Age</strong> : {age}
				</p>
				<p>
					<strong>Email</strong> : {email}
				</p>
			</div>
			<div className="skills">
				<h2>My Skills:</h2>
				<ul>
					{skills.map((skill) => (
						<li key={skill}>{skill}</li>
					))}
				</ul>
			</div>
			<div className="interests">
				<h2>My Interests:</h2>
				<ul>
					{interests.map((interest) => (
						<li key={interest}>{interest}</li>
					))}
				</ul>
			</div>
			<div className="social-links">
				<h2>My Social Medias:</h2>
				{socialLinks.map((socialLink) => (
					<p key={socialLink.mediaName}>
						<strong>{socialLink.mediaName}</strong>{" "}
						{socialLink.mediaAddress}
					</p>
				))}
			</div>
			<hr />
		</div>
	);
};

// function add(num1, num2) {
// 	return num1 + num2;
// }

// add(10, 20); // num1 = 10 num2  = 20
// add(100, 200); // num1 = 100 num2  = 200

// function staticAdd () {
//     return 10 + 30
// }

// staticAdd()
// staticAdd()

export default BioData;

// export const name = "Mahir";

// BioData
// bioData
