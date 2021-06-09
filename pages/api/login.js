// api folder ---> Welcome to the server-side world
import { login } from "../../lib/users";
// Request Handler Function
export default (req, res) => {

  if (req.method !== "POST") {
    res.status(405).json({
      error: "METHOD_NOT_ALLOWED",
      message: `${req.method} is not allowed, please use the POST http method.`,
    });
    return;
  }
  const { username, password } = JSON.parse(req.body);

  res.status(200).json(login(username, password));
};