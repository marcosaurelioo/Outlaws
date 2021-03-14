import React from "react";

import { Route, Switch, BrowserRouter } from "react-router-dom";
import Login from "../Pages/Login/login";

export default function Routes({ setPlaySong }) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Login setPlaySong={setPlaySong} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
