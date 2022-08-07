// import { createAction } from '@reduxjs/toolkit';

// export const addContact = createAction('contacts/addContact');
// export const deleteContact = createAction('contacts/deleteContact');
// export const findContact = createAction('contacts/findContact');

import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContacts, deleteContacts, getContacts } from 'service/apiService';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await getContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addNewContact = createAsyncThunk(
  'contacts/addNewContact',
  async (dataContact, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await addContacts(dataContact);
      console.log('~ resp data', data);
      // if (resp.status !== 201) {
      //   throw new Error("Can't add contact. Server error.");
      // }
      return data;

      // const data = await response.json();
      // dispatch(addTodo(data));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const resp = await deleteContacts(id);
      console.log('~ resp', resp);
      // if (resp.status !== 201) {
      //   throw new Error("Can't add contact. Server error.");
      // }
      return id;

      // const data = await response.json();
      // dispatch(addTodo(data));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
