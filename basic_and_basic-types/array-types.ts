// Array Types

const person = {
	name: 'New',
	age: 25,
	hobbies: ['Sports', 'Cooking'],
};

let favActivities: string[];

favActivities = ['Sports'];

// console.log(person);

for (const hobbies of person.hobbies) {
	console.log(hobbies);
}
