import "./App.scss";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import LoginPage from "./pages/loginPage/LoginPage";
import ShoppingPage from "./pages/shoppingPage/ShoppingPage";
import Menu from "./components/menu/Menu";

function App() {
  return (
    <div className="App">
      <Menu />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/shopping" component={ShoppingPage} />
      </Switch>
    </div>
  );
}

export default App;
