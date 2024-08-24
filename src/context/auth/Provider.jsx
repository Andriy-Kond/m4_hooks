import { createContext, useMemo, useState } from "react";
import authContext from "./context";

import avatar from "./avatar.jpg";

// const authContext = createContext();

function Provider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onLogIn = () => {
    setUser({ name: "Mango", avatar });
    setIsLoggedIn(true);
  };

  const onLogOut = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  const providerValue = useMemo(() => {
    return { user, isLoggedIn, onLogIn, onLogOut };
  }, [isLoggedIn, user]);

  return (
    <authContext.Provider value={providerValue}>
      {children}
    </authContext.Provider>
  );
}

export default Provider;
