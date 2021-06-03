import axios from "axios";

// Login the User by its username and password which returns the Response as a Promise
export const loginUser = async (username, password) => {
	const { data } = await axios.post("/api/login", { username, password });

	return data;
};
// Forget about auth.js
// I need to setup a server.js --> I have propblem here
