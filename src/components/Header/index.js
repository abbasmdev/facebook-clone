import { Avatar, IconButton } from "@material-ui/core";
import { useSelector } from "react-redux";

import {
  Home as HomeIcon,
  Search as SearchIcon,
  Flag as FlagIcon,
  SubscriptionsOutlined as SubscriptionsOutlinedIcon,
  StorefrontOutlined as StorefrontOutlinedIcon,
  SupervisedUserCircle as SupervisedUserCircleIcon,
  Add as AddIcon,
  ExpandMore as ExpandMoreIcon,
  Forum as ForumIcon,
  NotificationsActive as NotificationsActiveIcon,
} from "@material-ui/icons";
import { selectAuthUser } from "../../store/auth/authSlice";
import HeaderOption from "./HeaderOption";

import styles from "./index.module.css";
function Header() {
  const authUser = useSelector(selectAuthUser);
  return (
    <div className={styles.container}>
      <div className={styles.headerLeft}>
        <img
          className={styles.logo}
          src="/images/logo.png"
          alt="Facebook logo"
        />
        <div className={styles.searchContainer}>
          <SearchIcon />
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>
      <div className={styles.headerCenter}>
        <div className={styles.options}>
          <HeaderOption Icon={HomeIcon} />
          <HeaderOption Icon={FlagIcon} />
          <HeaderOption Icon={SubscriptionsOutlinedIcon} />
          <HeaderOption Icon={StorefrontOutlinedIcon} />
          <HeaderOption Icon={SupervisedUserCircleIcon} />
        </div>
      </div>
      <div className={styles.headerRight}>
        <div className={styles.userInfo}>
          <Avatar src={authUser?.photoURL} />
          <span>{authUser?.displayName}</span>
        </div>
        <div className={styles.headerRightActionsList}>
          <IconButton>
            <AddIcon />
          </IconButton>
          <IconButton>
            <ForumIcon />
          </IconButton>
          <IconButton>
            <NotificationsActiveIcon />
          </IconButton>
          <IconButton>
            <ExpandMoreIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Header;
