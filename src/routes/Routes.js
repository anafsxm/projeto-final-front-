import React from "react";
import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import { NotFound } from "../pages";
import PathRoutes from "./PathRoutes";

function Routes() {
  return (
    <Router>
      <Switch>
        {PathRoutes?.map(({ id, path, exact, element }) => (
          <Route key={id} element={element} exact={exact} path={path} />
        ))}
        <Route element={NotFound} />
      </Switch>
    </Router>
  );
}

export default Routes;
