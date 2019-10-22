import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Header from "./components/layouts/Header";

import WrappedNormalLoginForm from "./components/users/AddUser";
import Users from "./components/users/TableHolder";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <React.Fragment>
            <Header header="User Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/add" component={WrappedNormalLoginForm} />
                <Route exact path="/" component={Users} />
              </Switch>
            </div>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
