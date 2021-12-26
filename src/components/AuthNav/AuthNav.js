import { NavLink } from "react-router-dom";

const AuthNav = () => {
  return (
    <div>
      <NavLink
        to="/register"
        className={({ isActive }) => (isActive ? "link activ" : "link")}
      >
        Sign Up
      </NavLink>
    </div>
  );
};
export default AuthNav;
