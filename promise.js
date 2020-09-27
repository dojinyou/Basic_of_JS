// const promise = new Promise((resolve, reject) => {
// 	console.log('doing something...');
// 	setTimeout(() => {
// 		resolve('dojin');
// 	}, 2000);
// });

// promise.then((value) => {
// 	console.log(value);
// });

// const fetchNumber = new Promise((resolve, reject) => {
// 	setTimeout(() => resolve(1), 1000);
// });

// fetchNumber
// 	.then((num) => num * 2)
// 	.then((num) => num * 3)
// 	.then((num) => {
// 		return new Promise((resolve, reject) => {
// 			setTimeout(() => resolve(num - 1), 1000);
// 		});
// 	})
// 	.then((num) => console.log(num));

class UserStorage {
	loginUser(id, password) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (id === 'dojin' && password === '1234') {
					resolve(id);
				} else {
					reject(new Error('not found'));
				}
			}, 2000);
		});
	}

	getRoles(user) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (user === 'dojin') {
					resolve({ name: 'dojin', role: 'admin' });
				} else {
					reject(new Error('no access'));
				}
			}, 1000);
		});
	}
}
const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage //
	.loginUser(id, password)
	.then(userStorage.getRoles)
	.then((user) => alert(`Hello ${user.name}, you have a ${user.role} roles.`))
	.catch(console.log);
