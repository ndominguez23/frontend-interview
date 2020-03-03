import * as React from "react";
import { useUserContext, useSetUserContext } from "../contexts/user";

const Profile = () => {
  const userContext = useUserContext();
  const setUserContext = useSetUserContext();

  const [user, setUser] = React.useState({
    email: "",
    name: "",
  })

  return (
    <div>
      <h1>Edit your profile</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (
            user.email &&
            user.name
          ) {
            setUserContext({password: userContext.password, ...user});
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
          name="name"
          value={user.name}
          placeholder="Name"
          onChange={e => {
            setUser({...user, name: e.target.value});
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Profile;
