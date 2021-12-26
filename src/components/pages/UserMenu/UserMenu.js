import Button from "react-bootstrap/Button";
import ContactList from "../../ContactList";
import s from "../UserMenu/UserMenu.module.css";

export default function UserMenu() {
  return (
    <>
      <div className={s.user__menu}>
        <p>User email, </p>
        <Button variant="primary" type="submit" size="sm">
          Logout
        </Button>
      </div>
      {/* <ContactList/> */}
    </>
  );
}
