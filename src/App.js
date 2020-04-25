import "./App.css";
import React, { Component } from "react";
import Login from "./components/Login";
import Admin from "./components/Admin";
import Logout from "./components/Logout";
import NoMatch from "./components/NoMatch";


import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpensis from "./components/IncomeExpensis";
import TransactinList from "./components/TransactinList";
import AddTransaction from "./components/AddTransaction";
//import Arrays from './components/Arrays';
// import TicTacToe from "./components/TicTacToe";
import {BrowserRouter,Link,Switch,Route} from "react-router-dom";
export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {/* <TicTacToe /> */}
        <Header />
        <Balance />
        <IncomeExpensis />
        <TransactinList />
        <AddTransaction />
        <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route path="/admin" component={Admin}></Route>
        <Route path = "/logout" component={Logout}></Route>
        <Route component={NoMatch} ></Route>
      </Switch>
      </BrowserRouter>
      </div>
    );
  }
}
