import axios from "axios";

// Login the User by its username and password which returns the Response as a Promise
export const loginUser = async (username, password) => {
<<<<<<< HEAD
  const res = await fetch("/api/login", {
    body: JSON.stringify({ username, password }),
    method: "POST",
  });
  const data = await res.json();
  return data;
};
// ------------------------------------------------------------*
export const registerUser = async (payload) => {
  const res = await fetch("/api/register", {
    body: JSON.stringify(payload),
    method: "POST",
  });
  const data = await res.json();
  return data;
};
// ------------------------------------------------------------*
export const whoAmI = async () => {
  const res = await fetch("/api/profile", {
    headers: {
      authorization: window.localStorage.getItem("token"),
    },
    method: "GET",
  });
  const data = await res.json();
  return data;
};
=======
	const { data } = await axios.post("/api/login", { username, password });

	return data;
};


// Axios for HTTP request
>>>>>>> main
