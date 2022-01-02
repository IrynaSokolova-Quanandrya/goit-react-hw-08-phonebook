import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { authSelectors } from "redux/auth";
import s from "./Navigation.module.css";

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
  return (
    <div>
      <nav className={s.nav}>
        <NavLink
          to="/"
          className={({ isActive }) => `${s.link} ${isActive ? s.activ : ""}`}
        >
          Home
        </NavLink>
        {isLoggedIn && 
        <NavLink
          to="/contacts"
          className={({ isActive }) => `${s.link} ${isActive ? s.activ : ""}`}
        >
          Contacts
        </NavLink>}
      </nav>
    </div>
  );
};

export default Navigation;
