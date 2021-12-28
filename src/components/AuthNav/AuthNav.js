import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <div>
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
