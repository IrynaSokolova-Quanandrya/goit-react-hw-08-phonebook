import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div>
      <nav className={s.nav}>
        <NavLink
          to="/"
          className={({ isActive }) => `${s.link} ${isActive ? s.activ : ""}`}
        >
          Home
        </NavLink>
        {/* <NavLink
          to="/contacts"
          className={({ isActive }) => `${s.link} ${isActive ? s.activ : ""}`}
        >
          Contacts
        </NavLink> */}
      </nav>
    </div>
  );
};

export default Navigation;
