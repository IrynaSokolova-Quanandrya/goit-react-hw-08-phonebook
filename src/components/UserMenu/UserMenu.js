import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import { authSelectors, authOperations } from "../../redux/auth";
import s from "../UserMenu/UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(authSelectors.getUserEmail);

  return (
    <>
      <div className={s.user__menu}>
        <p className={s.user__menu__text}>Hello, {email} </p>
        <Button
          variant="primary"
          type="submit"
          size="sm"
          onClick={() => dispatch(authOperations.logOut())}
        >
          Logout
        </Button>
      </div>
    </>
  );
}
