import { useSelector } from "react-redux";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import styles from "../AppBar/AppBar.module.css";
import AuthNav from "../AuthNav/AuthNav";
import { authSelectors } from "../../redux/auth";

function Appbar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header className={styles.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
export default Appbar;
