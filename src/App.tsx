import "./App.scss";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import LoginPage from "./pages/loginPage/LoginPage";
import ShoppingPage from "./pages/shoppingPage/ShoppingPage";
import Menu from "./components/menu/Menu";
import PlanPage from "./pages/planPage/PlanPage";
import UserProfilePage from "./pages/userProfilePage/UserProfilePage";

function App() {
  return (
    <div className="App">
      <Menu />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/plan" component={PlanPage} />
        <Route path="/shopping" component={ShoppingPage} />
        <Route path="/profile" component={UserProfilePage} />
      </Switch>
    </div>
  );
}

export default App;
