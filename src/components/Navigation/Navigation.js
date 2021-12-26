import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div>
      <nav className={styles.nav}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "link activ" : "link")}
        >
          Home
        </NavLink>

        <NavLink
          to="/login"
          className={({ isActive }) => (isActive ? "link activ" : "link")}
        >
          Log In
        </NavLink>
        <NavLink
          to="/contacts"
          className={({ isActive }) => (isActive ? "link activ" : "link")}
        >
          Contacts
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
