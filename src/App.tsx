import "./App.scss";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import LoginPage from "./pages/loginPage/LoginPage";
import ShoppingPage from "./pages/shoppingPage/ShoppingPage";
import Menu from "./components/menu/Menu";
import {
  useDispatch,
  //  useSelector
} from "react-redux";
import { bindActionCreators } from "redux";
import {
  actionCreators,
  //  State
} from "./state";
function App() {
  const dispatch = useDispatch();

  const {
    //  depositMoney,
    //   withdrawMoney,
    //    bankrupt,
    getUser,
  } = bindActionCreators(actionCreators, dispatch);
  // const state = useSelector((state: State) => {
  //   return state.bank;
  // });

  return (
    <div className="App">
      <button
        onClick={() => {
          getUser();
        }}
      >
        GET USER INFO
      </button>
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
