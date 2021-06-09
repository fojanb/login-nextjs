import React from "react";
// import Router from "next/router";
// import { redirectToLogin } from "./dashboard";
import Link from "next/link";

export const Homepage = () => {
  return (
    <div>
      <h2>Welcome to the home-page</h2>
      <Link href="auth/login">Login</Link>
      <Link href="auth/register">Register</Link>
    </div>
  );
};
