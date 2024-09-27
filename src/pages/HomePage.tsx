import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../features/userSlice";
import { RootState } from "../app/store";

const HomePage = () => {
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login({ id: "123", name: "John Doe" }));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <h1>Home Page</h1>
      {user ? (
        <div>
          <p>Welcome, {user.name}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};

export default HomePage;
