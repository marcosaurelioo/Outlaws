import React from "react";

import { Route, Switch, BrowserRouter } from "react-router-dom";

import Home from "../Pages/Home/home";
import Planet from "../Pages/Planet/planet";
import Parallax from "../Components/Parallax/parallax";
import Login from "../Pages/Login/login";

export default function Routes({ setPlaySong }) {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route path="/login" exact>
          <Login setPlaySong={setPlaySong} />
        </Route>
        <Route component={Parallax} path="/parallax" />
        <Route component={Planet} path="/planet" />
      </Switch>
    </BrowserRouter>
  );
}
