import Navigation from "../Navigation/Navigation";
import styles from "../AppBar/AppBar.module.css";

function Appbar() {
  return (
    <header className={styles.header}>
      <Navigation />
    </header>
  );
}
export default Appbar;
