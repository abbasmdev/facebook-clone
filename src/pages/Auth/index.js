import { Button } from "@material-ui/core";
import styles from "./index.module.css";
function Auth() {
  const loginBtnClickHandler = () => {};

  return (
    <div className={styles.container}>
      <div className={styles.loginContainer}>
        <img
          src="/images/logo.png"
          alt="Facebook logo"
          width="100"
          height="100"
        />
        <Button onClick={loginBtnClickHandler} variant="outlined">
          Login with google
        </Button>
      </div>
    </div>
  );
}

export default Auth;
