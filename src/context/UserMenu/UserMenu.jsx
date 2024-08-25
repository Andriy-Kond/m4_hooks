import { useContext } from "react";
import authContext from "context/auth/context";

function UserMenu() {
  const { user, isLoggedIn, onLogIn, onLogOut } = useContext(authContext);

  return (
    <div>
      {user?.name}
      <button onClick={onLogOut}>LogOut</button>
    </div>
  );
}

export default UserMenu;
