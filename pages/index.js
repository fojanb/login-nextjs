import React from "react";
import Link from "next/link";
const Homepage = () => {
  const styles = {
    width: "40%",
    justifyContent: "center",
    margin: "100px auto",
    padding: "40px",
    backgroundColor :""
  };
  return (
    <div className="card" style={styles}>
      {/* <img src="..." className="card-img-top" alt="..." /> */}
      <div className="card-body">
        <h5 className="card-title">Welcome Soldier!</h5>
        <p className="card-text">
          If you've already registered then please log in, else please register.
        </p>
        <Link href="auth/login">
          <a className="btn btn-primary" style={{marginRight:"30px"}}>Login</a>
        </Link>
        <Link href="auth/register">
          <a className="btn btn-primary">Register</a>
        </Link>
      </div>
    </div>
  );
};
export default Homepage;
