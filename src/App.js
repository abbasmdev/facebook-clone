import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import AuthPage from "./pages/Auth";
import HomePage from "./pages/Home";

import styles from "./App.module.css";
import { auth as firebaseAuth } from "./firebase/firebase";

function App() {
  const [authUser, authLoading, authError] = useAuthState(firebaseAuth);
  const history = useHistory();
  firebaseAuth.onAuthStateChanged((user) => {
    if (user) {
      history.replace("/");
    } else {
      history.replace("/auth");
    }
  });

  return (
    <div className={styles.app}>
      {authLoading ? (
        <p>Loading...</p>
      ) : (
        <Switch>
          <Route path="/auth">
            <AuthPage />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      )}
    </div>
  );
}

export default App;
