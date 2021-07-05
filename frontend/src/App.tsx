import React from "react";
import { Route, Switch } from "react-router-dom";

import { SignIn } from "./pages/SignIn";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          component={SignIn}
        />
        <Route
          path="/home"
          component={Home}
        />
      </Switch>
    </div>
  );
}

export default App;
