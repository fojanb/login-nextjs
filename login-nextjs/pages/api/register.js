import { register } from "../../lib/users";

export default (req, res) => {
	if (req.method !== "GET") {
		res.status(404).json({
			error: "METHOD_NOT_ALLOWED",
			message: `${req.method} is not allowed, please use the GET http method.`,
		});
		return;
	}

	const {
		body: { username, password },
	} = req;

	res.status(200).json(register(username, password));
};
