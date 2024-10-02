import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../features/userSlice";
import { RootState } from "../app/store";

const Navigation = () => {
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();

  // const handleLogout = () => {
  //   dispatch(logout());
  // };

  return (
    <div className="fixed bottom-3 w-full">
      <div className="max-w-80 w-[95%] mx-auto shadow-lg rounded-full ">
        <div className="py-3 px-6 flex justify-between">
          {!user ? (
            <Link to="/login">Login</Link>
          ) : (
            <>
              <Link to="/home">H</Link>
              <Link to="/shop">S</Link>
              <Link to="/today">T</Link>
              <Link to="/creator">C</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
