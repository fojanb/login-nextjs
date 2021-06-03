import axios from "axios";
export const loginUser = async (email, password) => {
  const { data } = await axios.post("/api/login", { email, password });
  console.log(data);
};
// Forget about auth.js
// I need to setup a server.js --> I have propblem here
