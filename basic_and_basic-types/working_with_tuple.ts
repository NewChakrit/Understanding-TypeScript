// Working with Tuples

const person: {
	name: string;
	age: number;
	hobbies: string[];
	role: [number, string];
} = {
	name: 'New',
	age: 25,
	hobbies: ['Sports', 'Cooking'],
	role: [2, 'author'],
};

person.role.push('admin'); //push it be except
// person.role[2] = 'user';  //error

// person.role = [0, "user", "admin"] // error

for (let item of person.role) {
	console.log(item);
}
