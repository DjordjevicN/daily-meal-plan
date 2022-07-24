import "./App.scss";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import ShoppingPage from "./pages/shoppingPage/ShoppingPage";
import PlanPage from "./pages/planPage/PlanPage";
import UserProfilePage from "./pages/userProfilePage/UserProfilePage";

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
        <Route path="/plan" component={PlanPage} />
        <Route path="/shopping" component={ShoppingPage} />
        <Route path="/profile" component={UserProfilePage} />
      </Switch>
    </div>
  );
}

export default App;
