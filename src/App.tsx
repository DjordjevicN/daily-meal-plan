// import React, { useEffect } from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import LoginPage from "./pages/loginPage/LoginPage";
import ShoppingPage from "./pages/shoppingPage/ShoppingPage";
import Menu from "./components/menu/Menu";
// import { useDispatch, useSelector } from "react-redux";
// import { bindActionCreators } from "redux";
// import { actionCreators, State } from "./state";
function App() {
  // const dispatch = useDispatch();
  // const { getAllIngredients } = bindActionCreators(actionCreators, dispatch);
  // const state = useSelector((state: State) => {
  //   return state;
  // });
  // console.log(state);
  // useEffect(() => {
  //   getAllIngredients();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

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
