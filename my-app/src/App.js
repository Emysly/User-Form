import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/layouts/Header";
import Addusers from "./components/contacts/Addcontact";
// import Users from "./components/contacts/Contacts";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Header header="User Manager" />
          <div className="container">
            <Switch>
              <Route exact path="/add" component={Addusers} />
              {/* <Route exact path="/" component={Users} /> */}
            </Switch>
          </div>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
