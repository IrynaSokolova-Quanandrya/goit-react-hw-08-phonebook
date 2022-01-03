import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { contactsOperations } from "redux/contacts";
import s from "../ContactsPage/ContactsPage.module.css";
import { contactsSelectors } from "redux/contacts";
import ContactList from "../../components/ContactList";
import Filter from "../../components/Filter";
import Container from "components/Container/Container";

export default function Contacts() {
  const contactsList = useSelector(contactsSelectors.getAllContacts)
  const dispatch = useDispatch();
  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);
  return (
    <Container>
      {contactsList.length > 0 && <Filter />}
      <ContactList />
      <Button variant="primary" type="button" size="sm">
        <Link to="/contacts/addNewContact" className={s.add}>
          Add contact
        </Link>
      </Button>
    </Container>
  );
}
