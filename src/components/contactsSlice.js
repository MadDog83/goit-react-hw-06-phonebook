import { createSlice } from '@reduxjs/toolkit';

   // createSlice generates a reducer and actions based on the provided configuration.
const contactsSlice = createSlice({
  // The name of the slice and the initial state.
  name: 'contacts',
  initialState: { contacts: [], filter: '' },
  // The "case reducers". Each key generates an action creator and handles updates for that specific action.
  reducers: {
    // Action and reducer for adding a contact.
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    // Action and reducer for deleting a contact.
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
    },
    // Action and reducer for setting the filter.
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { actions } = contactsSlice;
export default contactsSlice.reducer;