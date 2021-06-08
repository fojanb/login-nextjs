import React , {useState}from "react";
import Router from "next/router";
export default function Dashboard() {
<<<<<<< HEAD
  const [user, setUser] = useState({});
  // Watchers
  React.useEffect(() => {
    if (!window.localStorage.getItem("token")) {
      Router.push("/auth/login");
    } else {
      (async () => {
        try {
          const data = await whoAmI();
          console.log("whoAmI", data);
          setUser(data.payload);
        } catch (error) {}
      })();
    }
  }, []);

  function handleLogout(e) {
    e.preventDefault();

    window.localStorage.removeItem("token");
    window.sessionStorage.removeItem("token");

    Router.push("/auth/login");
  }

  if (user.username) {
    return (
      <>
        <nav className="navbar navbar-light" style={{ backgroundColor: "#e3f2fd" }}>
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Welcome {user.username}!
            </a>
            <button className="btn btn-info" type="button" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </nav>
        <h3>{user.username}'s Profile</h3>
      </>
    );
  }
  return <div>Welcome back soldier. Welcome to your empty profile.</div>;
=======
	// Watchers
	React.useEffect(() => {
		if (!window.localStorage.getItem("token")) {
			Router.push("/auth/login");
		}
	}, []);

	return <div>Welcome back soldier. Welcome to your empty profile.</div>;
>>>>>>> main
}

// Fojan side notes :
// class A extends React.Component {
//     componentDidUpdate() {
//         React.useEffect(() => {

//         }) // with no second param
//     }
//     componentDidMount() {
//         React.useEffect(() => {

//         }, []) // the Second param should be empty
//     }
//     componentWillReceiveProps() {
//         React.useEffect(() => {

//         }, [props.name]) // The Second param is everything what you want
//     }
//     componentWillUnmount() {
//         React.useEffect(() => {
//             document.querySelectorAll("button").addEventListener("click", (e) => {

//             }, {})
//             return () => {
//                 // This function will be called before raise the Component's Destroy Event
//                 document.querySelectorAll("button").removeEventListener("click", (e) => {

//                 })
//             }
//         })
//     }
//     render() {
//         return (
//             <div>salam</div>
//         )
//     }
// }
