import React, { useCallback, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { useAuthState } from "./infrastructure/contexts/AuthStateContext";

import { Login } from "./ui/pages/Login";
import { Profile } from "./ui/pages/Profile";
import { Preloader } from "./ui/preloader/Preloader";

function App() {
  const { isLoggedIn, restoreToken, isLoading } = useAuthState();

  const restoreSession = useCallback(async () => await restoreToken(), [restoreToken]);
  useEffect(() => {
    restoreSession();
    // eslint-disable-next-line
  }, []);

  // const checkLogin = () => (isLoggedIn ? <Profile /> : <Redirect to="/accounts/login" />);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <Switch>
      <Route exact path="/">
        {(isLoggedIn ? <Profile /> : <Redirect to="/accounts/login" />)}
      </Route>
      <Route exact path="/accounts/login">
        <Login />
      </Route>
    </Switch>
  );
}

export default App;
