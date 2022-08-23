import "./App.scss";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import ShoppingPage from "./pages/shoppingPage/ShoppingPage";
import UserProfilePage from "./pages/userProfilePage/UserProfilePage";
import Dashboard from "./pages/dashboard/Dashboard";

import { useDispatch } from "react-redux";
import { actionCreators } from "./state";
import { bindActionCreators } from "redux";
import LoginForm from "./UiComponents/organism/LoginForm/LoginForm";

function App() {
  const dispatch = useDispatch();
  const { getUser } = bindActionCreators(actionCreators, dispatch);
  if (localStorage.getItem("userId")) {
    getUser(localStorage.getItem("userId"));
  }

  return (
    <div className="App">
      <div
        style={{
          height: "100vh",
          width: "100%",
          backgroundColor: "#ecf0f3",
          display: "grid",
          placeItems: "center",
        }}
      >
        <LoginForm />
      </div>
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
