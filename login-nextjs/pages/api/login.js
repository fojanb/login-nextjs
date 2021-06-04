import { login } from "../../lib/users";

export default (req, res) => {
	if (req.method !== "POST") {
		res.status(404).json({
			error: "METHOD_NOT_ALLOWED",
			message: `${req.method} is not allowed, please use the POST http method.`,
		});
		return;
	}

	const {
		body: { username, password },
	} = req;

	res.status(200).json(login(username, password));
};
