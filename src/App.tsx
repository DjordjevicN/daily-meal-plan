import "./App.scss"
import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/homePage/HomePage"
import ShoppingPage from "./pages/shoppingPage/ShoppingPage"
import SingleMealPage from "./pages/singleMealPage/SingleMealPage"
import UserProfilePage from "./pages/userProfilePage/UserProfilePage"
import Dashboard from "./pages/dashboard/Dashboard"
import SignIn from "./pages/signIn/SignIn"
import { useDispatch } from "react-redux"
import { actionCreators } from "./state"
import { bindActionCreators } from "redux"
import Login from "./pages/Login/Login"
import FoodTransfer from "./pages/FoodTransfer/FoodTransfer"

function App() {
  const dispatch = useDispatch()
  // const { getUser } = bindActionCreators(actionCreators, dispatch)
  // if (localStorage.getItem("userId")) {
  //   getUser(localStorage.getItem("userId"))
  // }

  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<HomePage />} />
        <Route path="/shopping" element={<ShoppingPage />} />
        <Route path="/profile" element={<UserProfilePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/login" element={<Login />} />
        <Route path="/meal/:id" element={<SingleMealPage />} />
        <Route path="/foodTransfer" element={<FoodTransfer />} /> */}

        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  )
}

export default App
