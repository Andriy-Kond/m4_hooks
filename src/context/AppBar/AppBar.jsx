import { useContext } from "react";
import authContext from "context/auth/context";

import Navigation from "context/Navigation";
import UserMenu from "context/UserMenu";

// З хуком useContext:

function AppBar() {
  const { isLoggedIn, onLogIn } = useContext(authContext);

  return (
    <header>
      <Navigation />

      {isLoggedIn ? (
        <UserMenu />
      ) : (
        <button type="button" onClick={onLogIn}>
          Login
        </button>
      )}
    </header>
  );
}

// Без хуку useContext:
function AppBarOld() {
  return (
    <authContext.Consumer>
      {({ user, isLoggedIn, onLogIn, onLogOut }) => (
        <header>
          <Navigation />
          <UserMenu />
          {isLoggedIn ? (
            <UserMenu onLogOut={onLogOut} user={user} />
          ) : (
            <button type="button" onClick={onLogIn}>
              Login
            </button>
          )}
        </header>
      )}
    </authContext.Consumer>
  );
}

export default AppBar;
