import React from "react";
import Link from "next/link";
const Homepage = () => {
  return (
    <div>
      <h3>Welcome Soldier</h3>
      <Link href="auth/login">Login</Link>
      <Link href="auth/register">Register</Link>
    </div>
  );
};
export default Homepage;