import * as React from "react";
import Layout from "@layout/index";
import Home from "@pages/home";
import Index from "@pages/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Index />
          </Route>
          <Route path="/home" exact>
            <Home />
          </Route>
        </Switch>
      </Router>
    </Layout>
  );
};

export default App;
