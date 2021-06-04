import { findUser, login, register, verifyToken } from "../../lib/users";

export default (req, res) => {
	if (req.method !== "GET") {
		res.status(404).json({
			error: "METHOD_NOT_ALLOWED",
			message: `${req.method} is not allowed, please use the GET http method.`,
		});
		return;
	}
	const authorizationToken = req.headers.authorization;
	const isVerified = verifyToken(authorizationToken);

	if (isVerified && isVerified.has) {
		console.log(isVerified.username);
		const user = findUser(isVerified.username);
		res.status(200).json({
			payload: {
				username: user.username,
				email: user.email,
				id: user.id,
			},
		});
	}

	res.status(404).json({
		error: "WRONG_CREDENTIAL",
		message: "Your are not allowed to see this API.",
	});
};
