import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import s from "../ContactsPage/ContactsPage.module.css";
import ContactList from "../../ContactList";
import Filter from "../../Filter";
export default function Contacts() {
  return (
    <>
      <Filter />
      <ContactList />
      <Button variant="primary" type="button" size="sm">
        <Link to="/contacts/addNewContact" className={s.add}>
          Add contact
        </Link>
      </Button>
    </>
  );
}
