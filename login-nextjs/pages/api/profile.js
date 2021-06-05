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
  const verifiedUser = verifyToken(authorizationToken);

  console.log("username", verifiedUser.username);
  if (trueTypeOf(verifiedUser) === "object" && verifiedUser.hasOwnProperty("username")) {
    const user = findUser(verifiedUser.username);
    res.status(200).json({
      payload: {
        username: user.username,
        email: user.email,
        id: user.id,
      },
    });
    return;
  }

  res.status(401).json({
    error: "UNAUTHORIZED",
    message: "Not allowed.",
  });
};
