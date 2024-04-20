const Greet = (parameter) => {
	console.log(parameter, "parameter");
	return <div>Greetings {parameter.name}</div>;
};

export default Greet;
