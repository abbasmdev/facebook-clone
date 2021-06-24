import { Switch, Route, Redirect } from "react-router-dom";
import AuthPage from "./pages/Auth";
import HomePage from "./pages/Home";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
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
    </div>
  );
}

export default App;
