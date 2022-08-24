import "./App.scss";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import ShoppingPage from "./pages/shoppingPage/ShoppingPage";
import UserProfilePage from "./pages/userProfilePage/UserProfilePage";
import Dashboard from "./pages/dashboard/Dashboard";

import { useDispatch } from "react-redux";
import { actionCreators } from "./state";
import { bindActionCreators } from "redux";

function App() {
  const dispatch = useDispatch();
  const { getUser } = bindActionCreators(actionCreators, dispatch);
  if (localStorage.getItem("userId")) {
    getUser(localStorage.getItem("userId"));
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shopping" element={<ShoppingPage />} />
        <Route path="/profile" element={<UserProfilePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
