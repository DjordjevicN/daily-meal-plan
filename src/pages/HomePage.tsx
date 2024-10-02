import { useNavigate } from "react-router-dom";
import { logout } from "../features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { useEffect } from "react";

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogged = useSelector((state: RootState) => state.user.isLogged);
  const { user } = useSelector((state: RootState) => state.user);

  const handleLogout = () => {
    console.log("logout");

    dispatch(logout());
    navigate("/login");
  };

  if (!isLogged) {
    console.log(isLogged);
    navigate("/login");
  }

  useEffect(() => {
    if (!isLogged) {
      console.log(isLogged);
      navigate("/login");
    }
  }, [isLogged, navigate]);

  return (
    <div>
      <p>home</p>
      <p>{user?.id}</p>
      <p>{user?.name}</p>
      <button onClick={() => handleLogout()}>Logout</button>
    </div>
  );
};

export default HomePage;
