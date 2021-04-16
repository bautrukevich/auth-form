import React, { useCallback, useEffect } from "react";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";

import { useAuthState } from "./infrastructure/contexts/AuthStateContext";
import { Login } from "./ui/pages/Login";
import { Profile } from "./ui/pages/Profile";

function App() {
  const history = useHistory();
  const { isLoggedIn, restoreToken } = useAuthState();

  useEffect(() => {
    (async () => {
      await restoreToken();
    })();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      history.push("/");
    }
  }, [history, isLoggedIn]);

  const checkLogin = useCallback(() => (isLoggedIn ? <Profile /> : <Redirect to="/accounts/login" />), [isLoggedIn]);

  return (
    <Switch>
      <Route exact path="/">
        {checkLogin}
      </Route>
      <Route exact path="/accounts/login">
        <Login />
      </Route>
    </Switch>
  );
}

export default App;
