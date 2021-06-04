import axios from "axios";
// Or: const axios = require("axios")
// Axios ---> promise based HTTP request
// Login the User by its username and password which returns the Response as a Promise
export const loginUser = async (username, password) => {
	const { data } = await axios.post("/api/login", { username, password });

	return data;
};




