import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { contactsSelectors, contactsOperations} from "../../redux/contacts";
import PropTypes from "prop-types";
import s from '../ContactList/СontactList.module.css';

export default function ContactList() {
  const contactsList = useSelector(contactsSelectors.getVisibleContacts);
  const dispatch = useDispatch();

  return (
    <ul className={s.contact__list}>
      {contactsList.map(({ id, name, number }) => (
        <li className={s.contact__item} key={id}>
          {name}: {number}
          <Button 
          type="button"
           onClick={() => dispatch(contactsOperations.deleteContact(id))} 
          variant="outline-danger">         
              Delete
            </Button>
                </li>
      ))}
    </ul>
  );
}
ContactList.prototype = {
  contactsList: PropTypes.object.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
