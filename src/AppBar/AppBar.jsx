import Navigation from "Navigation";
import UserMenu from "UserMenu";
import authContext from "context/auth/context";
import { useContext } from "react";

// З хуком useContext:

function AppBar() {
  const ctx = useContext(authContext);
  const { user, isLoggedIn, onLogIn, onLogOut } = ctx;

  return (
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
