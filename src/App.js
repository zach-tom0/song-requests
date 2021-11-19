import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import AuthPage from "./pages/AuthPage";
import RequestPage from "./pages/RequestPage";
import "./App.css";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <RequestPage />
        </Route>
        <Route path="/spotify" exact>
          <AuthPage />
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
