import Navigation from "../Navigation/Navigation";
import UserMenu from "../pages/UserMenu";
import styles from "../AppBar/AppBar.module.css";
import AuthNav from "../AuthNav/AuthNav";

function Appbar() {
  return (
    <header className={styles.header}>
      <Navigation />
      <AuthNav />
      <UserMenu />
    </header>
  );
}
export default Appbar;
