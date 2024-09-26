import { Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actionCreators } from "./state";
import { bindActionCreators } from "redux";
import construction from "../src/assets/Construction/construction.webp";

function App() {
  const dispatch = useDispatch();
  const { getUser } = bindActionCreators(actionCreators, dispatch);
  if (localStorage.getItem("userId")) {
    getUser(localStorage.getItem("userId"));
  }
  const featureGate = localStorage.getItem("featureGate");
  if (!featureGate) {
    return (
      <div className="w-[100vh] h-[100vh] flex items-center justify-center">
        <img className="w-[50%]" src={construction} alt="" />
      </div>
    );
  }

  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        {/* <Route path="/shopping" element={<ShoppingPage />} />
        <Route path="/profile" element={<UserProfilePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/login" element={<Login />} />
        <Route path="/meal/:id" element={<SingleMealPage />} />
        <Route path="/foodTransfer" element={<FoodTransfer />} />
        <Route path="*" element={<HomePage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
