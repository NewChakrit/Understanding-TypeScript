// Type Aliases & Object Types Custom Types

type Combinable = number | string;
type ComversionDescriptor = 'as-number' | 'as-text';

function combine(
	input1: Combinable,
	input2: Combinable,
	resultConversion: ComversionDescriptor
) {
	let result;
	if (
		(typeof input1 === 'number' && typeof input2 === 'number') ||
		resultConversion === 'as-number'
	) {
		result = +input1 + +input2;
	} else {
		result = input1.toString() + input2.toString();
	}

	return result;
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);

const combinedName = combine('New ', 'Chakrit', 'as-text');
console.log(combinedName);

// Object Types

type User = { name: string; age: number };

function greet(user: User) {
	console.log('Hi, I am ' + user.name);
}

function isOlder(user: User, checkAge: number) {
	return checkAge > user.age;
}

greet({ name: 'New', age: 25 });
