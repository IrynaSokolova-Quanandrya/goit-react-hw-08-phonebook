import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <div>
      <NavLink
        to="/login"
        className={({ isActive }) => `${s.link} ${isActive ? s.activ : ""}`}
      >
        Log In
      </NavLink>
      <NavLink
        to="/register"
        className={({ isActive }) => `${s.link} ${isActive ? s.activ : ""}`}
      >
        Sign Up
      </NavLink>
    </div>
  );
};
export default AuthNav;
