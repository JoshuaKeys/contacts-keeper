import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import ContactReducer from './ContactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types';

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        type: 'personal',
        date: '1600368930902',
        _id: '5f63b152cc10d773ce0d9009',
        name: 'Ted Johnson',
        email: 'ted.jhonson@test.com',
        phone: '+380999805529',
        user: '5f63a72183f0606a2ed59376',
        __v: 0,
      },
      {
        type: 'prefessional',
        date: '1600368811670',
        _id: '5f63b0b1ddfe356feac164a5',
        name: 'Sarah Smith',
        email: 'sarah.smith@test.com',
        phone: '+380991702955',
        user: '5f63a72183f0606a2ed59376',
        __v: 0,
      },
    ],
  };

  const [state, dispatch] = useReducer(ContactReducer, initialState);

  // Add Contact

  // Delete Contact

  // Set Current Contact

  // Clear Current Contact

  // Update Contact

  // Filter Contacts

  // Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
