import { createSelector } from "@reduxjs/toolkit";

const getContacts = (state) => state.contacts.contacts;
const getFilter = (state) => state.contacts.filter;

const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(normalizedFilter);
    });
  }
);
const contactsSelectors = {
  getContacts,
  getFilter,
  getVisibleContacts,
};
export default contactsSelectors;
