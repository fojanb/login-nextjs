import React from "react";
import { loginUser } from "../../../lib/auth";

export function LoginForm() {
	const [username, setUsername] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [rememberMe, setRememberMe] = React.useState(false);

	async function handleSubmit(e) {
		e.preventDefault();

		console.log(username, password, rememberMe);
		try {
			// API call:
			const data = await loginUser(username, password);

			if (data.payload && data.payload.token) {
				window.localStorage.setItem("token", data.payload.token);
			}
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<fieldset>
				<legend className="h1">Login</legend>
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
}
// end