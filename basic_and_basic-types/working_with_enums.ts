// Working with Enums

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
	ADMIN = 'ADMIN',
	READ_ONLY = 100,
	AUTHOR = 'AUTHOR',
}

const person = {
	name: 'New',
	age: 25,
	hobbies: ['Sports', 'Cooking'],
	role: Role.ADMIN,
};

if (person.role === Role.ADMIN) {
	console.log('is admin');
}
