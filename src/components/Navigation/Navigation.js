import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div>
      <nav className={s.nav}>
        <NavLink
          to="/"
          className={({ isActive }) => `${s.link} ${isActive ? s.activ : ""}`}
          // className={({ isActive }) => (isActive ? link activ : link)}
        >
          Home
        </NavLink>

        <NavLink
          to="/login"
          className={({ isActive }) => `${s.link} ${isActive ? s.activ : ""}`}
          // className={({ isActive }) => (isActive ? "link activ" : "link")}
        >
          Log In
        </NavLink>
        <NavLink
          to="/contacts"
          className={({ isActive }) => `${s.link} ${isActive ? s.activ : ""}`}
          // className={({ isActive }) => (isActive ? "link activ" : "link")}
        >
          Contacts
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
