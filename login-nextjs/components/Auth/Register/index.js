<<<<<<< HEAD
import React ,{useState}from "react";
import { registerUser } from "../../../lib/auth";

export function RegisterForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
=======
import React from "react";
import { loginUser } from "../../../lib/auth";

export function RegisterForm() {
	const [username, setUsername] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [rememberMe, setRememberMe] = React.useState(false);
>>>>>>> main

  async function handleSubmit(e) {
    e.preventDefault();

<<<<<<< HEAD
    try {
      const data = await registerUser({
        username,
        password,
        email,
      });
=======
		console.log(username, password, rememberMe);
		try {
			const data = await loginUser(username, password);
>>>>>>> main

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

<<<<<<< HEAD
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend className="h1">Register</legend>
        <div className="mb-3">
          <label htmlFor="emailInput" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="emailInput"
            className="form-control"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="usernameInput" className="form-label">
            Username
          </label>
          <input
            type="text"
            id="usernameInput"
            className="form-control"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="passwordInput" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="passwordInput"
            className="form-control"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </fieldset>
    </form>
  );
=======
	return (
		<form onSubmit={handleSubmit}>
			<fieldset>
				<legend className="h1">Register</legend>
				<div className="mb-3">
					<label htmlFor="usernameInput" className="form-label">
						Username
					</label>
					<input
						type="text"
						id="usernameInput"
						className="form-control"
						placeholder="Username"
						onChange={(e) => setUsername(e.target.value)}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="passwordInput" className="form-label">
						Password
					</label>
					<input
						type="password"
						id="passwordInput"
						className="form-control"
						placeholder="Password"
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<div className="mb-3">
					<div className="form-check">
						<input
							className="form-check-input"
							type="checkbox"
							id="RememberMeInput"
							onChange={(e) => setRememberMe(e.target.checked)}
						/>
						<label className="form-check-label" htmlFor="RememberMeInput">
							Remember Me
						</label>
					</div>
				</div>
				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</fieldset>
		</form>
	);
>>>>>>> main
}
