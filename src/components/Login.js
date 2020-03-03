import * as React from "react";
import { useSetUserContext } from "../contexts/user";

const Login = () => {
  const [user, setUser] = React.useState({
    email: "",
    password: ""
  });
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    setError(null);
  }, [user.email, user.password]);

  const setUserContext = useSetUserContext();
  return (
    <>
      <h1>Login</h1>
      {error && <p>Error: {error}</p>}
      <form
        onSubmit={e => {
          setError(null);
          e.preventDefault();
          if (
            user.email &&
            user.password &&
            user.password.trim() === "password"
          ) {
            setUserContext({
              name: "Test User",
              ...user
            });
          } else {
            setError("invalid");
          }
        }}
      >
        <input
          name="email"
          value={user.email}
          placeholder="Email"
          onChange={e => {
            setUser({...user, email: e.target.value});
          }}
        />
        <input
          name="password"
          value={user.password}
          placeholder="Password"
          onChange={e => {
            setUser({...user, password: e.target.value});
          }}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
