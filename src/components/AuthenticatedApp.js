import React from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./Home";
import Profile from "./Profile";
import Repositories from "./Repositories";
import RepoDetailCard from "./RepoDetailCard";

const AuthenticatedApplication = () => {
  return (
    <div>
      <Navigation />

      <Switch>
        <Route path="/profile">
          <Profile />
        </Route>

        <Route exact path="/repositories">
          <Repositories />
          <Route path="/:repoId" component={RepoDetailCard}/>
        </Route>


        <Route path="/">
          <Home />
        </Route>

        <Route path="*">
          <div>This path doesn't exist</div>
        </Route>
      </Switch>
    </div>
  );
};

export default AuthenticatedApplication;
