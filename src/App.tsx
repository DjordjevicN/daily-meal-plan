import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/shopping" element={<ShoppingPage />} />
        <Route path="/profile" element={<UserProfilePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/login" element={<Login />} />
        <Route path="/meal/:id" element={<SingleMealPage />} />
        <Route path="/foodTransfer" element={<FoodTransfer />} /> */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
