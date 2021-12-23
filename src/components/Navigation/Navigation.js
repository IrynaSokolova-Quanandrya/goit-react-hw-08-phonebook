import { NavLink } from "react-router-dom";
import styles from "../Navigation/Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "link activ" : "link")}
      >
        Home
      </NavLink>
      <NavLink
        to="/register"
        className={({ isActive }) => (isActive ? "link activ" : "link")}
      >
        Sign Up
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) => (isActive ? "link activ" : "link")}
      >
        Sign In
      </NavLink>
      <NavLink
        to="/contacts"
        className={({ isActive }) => (isActive ? "link activ" : "link")}
      >
        Contacts
      </NavLink>
    </nav>
  );
};

export default Navigation;
