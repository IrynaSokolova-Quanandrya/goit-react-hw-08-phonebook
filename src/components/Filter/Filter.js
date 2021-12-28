import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { contactsSelectors } from "../../redux/contacts";
import phonebookActions from "../../redux/contacts/contacts-actions";
import PropTypes from "prop-types";
import s from "../../styles/input.module.css";

export default function Filter() {
  const value = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();

  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        value={value}
        onChange={(e) =>
          dispatch(phonebookActions.changeFilter(e.target.value))
        }
        type="text"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
    </label>
  );
}
Filter.prototype = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
