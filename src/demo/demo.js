const parent = () => {
	let a = 10;

	child(a);
	// console.log(b);
};

const child = (param1) => {
	let b = 20;

	grandChild(b, param1);
};

const grandChild = (num1, num2) => {
	let c = 100;
	console.log(num1, num2, c);
};

// parent -> child() -> grandChild()

parent();

// 1 step data passing
// Parent - Child
