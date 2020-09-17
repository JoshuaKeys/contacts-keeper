import React, { Fragment, useContext } from 'react';
import contactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';

export const Contacts = () => {
  const { contacts } = useContext(contactContext);
  return (
    <Fragment>
      {contacts.map((contact) => (
        <ContactItem contact={contact} key={contact._id} />
      ))}
    </Fragment>
  );
};
