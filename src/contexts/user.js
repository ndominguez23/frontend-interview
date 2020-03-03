import * as React from "react";

const SetUserContext = React.createContext(null);
const UserContext = React.createContext(null);
export const useUserContext = () => {
  const user = React.useContext(UserContext);
  if (!user) throw new Error("Used outside of user context");
  return user;
};

export const useSetUserContext = () => {
  const setUser = React.useContext(SetUserContext);
  if (!setUser) throw new Error("Used outside of setUser context");
  return setUser;
};

export const AuthController = ({ children }) => {
  const [user, setUser] = React.useState({
    name: "Test user"
  });

  return (
    <UserContext.Provider value={user}>
      <SetUserContext.Provider value={setUser}>
        {children}
      </SetUserContext.Provider>
    </UserContext.Provider>
  );
};
