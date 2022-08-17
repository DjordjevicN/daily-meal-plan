import "./App.scss";
import { Route, Switch } from "react-router-dom";
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
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/shopping" component={ShoppingPage} />
        <Route path="/profile" component={UserProfilePage} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
