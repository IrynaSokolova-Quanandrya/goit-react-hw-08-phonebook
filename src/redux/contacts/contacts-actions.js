import { createAction } from "@reduxjs/toolkit";
// import { nanoid } from "nanoid";

export const fetchContactsRequest = createAction(
  "contacts/fetchContactsRequest"
);
export const fetchContactsSuccess = createAction(
  "contacts/fetchContactsSuccess"
);
export const fetchContactsError = createAction("contacts/fetchContactsError");

export const addContactRequest = createAction("contacts/addContactRequest");
export const addContactSuccess = createAction("contacts/addContactSuccess");
export const addContactError = createAction("contacts/addContactError");

export const deleteContactRequest = createAction(
  "contacts/deleteContactRequest"
);
export const deleteContactSuccess = createAction(
  "contacts/deleteContactsuccess"
);
export const deleteContactError = createAction("contacts/deleteContactError");

export const changeFilter = createAction("contacts/changeFilter");

// const addContact = createAction("contacts/add", (contact) => ({
//   payload: {
//     contact: {
//       id: nanoid(),
//       ...contact,
//     },
//   },
// }));

// const deleteContact = createAction("contact/Delete");

// const changeFilter = createAction("contact/changeFilter");

// const phonebookActions = {
//   addContact,
//   deleteContact,
//   changeFilter,
// };
// export default phonebookActions;
