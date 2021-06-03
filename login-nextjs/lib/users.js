const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// JWT Utilities
const jwtSecretKey = "#$T#TDFBdfbnkl34lktnvs9-7t34978tsdV!";
// Bcrypt utilities
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

console.log(hashPassword("123456"));
// Users list
const users = [
	{ id: 0, username: "alimaster", password: "$2b$10$Sl8BsmAmJAKUCKlG2FlwZOgbiCGMkEkpgjEfc/FDdFMcq6RFaZjw2" },
];

export function findUser(username) {
	return users.find((user) => user.username === username);
}

export function isUserExists(username) {
	return findUser(username) || false;
}

export function login(username, password) {
	if (!username || !password) {
		return {
			error: "WRONG_CREDENTIAL",
			message: `Username and Password is required.`,
		};
	}

	if (!isUserExists(username)) {
		return {
			error: "USER_NOT_FOUND",
			message: `${username} is not defined, make sure the user is registered before.`,
		};
	}

	const user = findUser(username);
	const hashedPassword = hashPassword(password);
	if (!checkPassword(hashedPassword, user.password)) {
		return {
			error: "WRONG_CREDENTIAL",
			message: "Your Password is wrong. Shame on you!(^_^)",
		};
	}

	// Create new token by username
	const token = jwt.sign({ username: user.username, id: user.id }, jwtSecretKey, {
		expiresIn: 3000,
	});

	return {
		payload: {
			token,
		},
	};
}

function register(username, password) {}

function hashPassword(password) {
	return bcrypt.hashSync(password, salt);
}

function checkPassword(currentHashedPassword, hashedPassword) {
	return bcrypt.compare(currentHashedPassword, hashedPassword);
}
