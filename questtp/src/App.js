import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import Island from "./components/Game/Island";
import Tutorial from "./components/Tutorial/Tutorial";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/tutorial" component={Tutorial} />
        <Route path="/island" component={Island} />
        // Add more routes as needed
      </Switch>
    </Router>
  );
}

export default App;
