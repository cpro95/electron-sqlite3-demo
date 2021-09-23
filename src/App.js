import React from "react";
import { Switch, Route } from "react-router-dom";

// Screens
import Home from "./screens/Home";
import Latest from "./screens/Latest";
import Search from "./screens/Search";
import Ratings from "./screens/Ratings";
import Details from "./screens/Details";

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/search" component={Search} />
    <Route exact path="/latest" component={Latest} />
    <Route exact path="/ratings" component={Ratings} />
    <Route exact path="/details/:id" component={Details} />
  </Switch>
);

export default App;
