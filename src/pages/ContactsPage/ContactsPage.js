import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { contactsOperations } from "redux/contacts";
import s from "../ContactsPage/ContactsPage.module.css";
import ContactList from "../../components/ContactList";
import Filter from "../../components/Filter";
import Container from "components/Container/Container";

export default function Contacts() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);
  return (
    <Container>
      <Filter />
      <ContactList />
      <Button variant="primary" type="button" size="sm">
        <Link to="/contacts/addNewContact" className={s.add}>
          Add contact
        </Link>
      </Button>
    </Container>
  );
}
