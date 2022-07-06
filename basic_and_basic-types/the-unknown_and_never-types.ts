// The "unknown" and "never" types

// let userInput: any;

let userInput: unknown;
let username: string;

userInput = 5;
userInput = 'Max';

if (typeof userInput === 'string') {
	username = userInput;
	console.log(username);
}

function generateError(message: string, code: number): never {
	throw { message: message, errorCode: code };
}

const result = generateError('An error occurred!', 500);
console.log(result);
