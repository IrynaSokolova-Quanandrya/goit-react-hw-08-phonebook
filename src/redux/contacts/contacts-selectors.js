import { createSelector } from "@reduxjs/toolkit";

const getLoading = (state) => state.contacts.loading;

const getFilter = (state) => state.contacts.filter;

const getAllContacts = (state) => state.contacts.items;

const getVisibleContacts = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ description }) =>
      description.toLowerCase().includes(normalizedFilter)
    );
  }
);

const contactsSelectors = {
  getLoading,
  getFilter,
  getVisibleContacts,
};
export default contactsSelectors;

// const getContacts = (state) => state.contacts.contacts;
// const getFilter = (state) => state.contacts.filter;

// const getVisibleContacts = createSelector(
//   [getContacts, getFilter],
//   (contacts, filter) => {
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter((contact) => {
//       return contact.name.toLowerCase().includes(normalizedFilter);
//     });
//   }
// );
// const contactsSelectors = {
//   getContacts,
//   getFilter,
//   getVisibleContacts,
// };
// export default contactsSelectors;
