import { useState } from 'react';
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { phonebook_container, title } from './App.module.css'

import defaultContacts from './contacts.json';

function App() {
  const [contacts, setContacts] = useState(defaultContacts);
  const [searchValue, setSearchValue] = useState('')

  function addContact(newContact) {
    setContacts((prevContacts) => [...prevContacts, newContact])
  }

  function deleteContact(id) {
    setContacts((prevContacts) => prevContacts.filter(contact => contact.id !== id))
  }

  // const foundContacts = contacts.filter(contact => contact.name.toLowerCase().includes(searchValue.toLowerCase()))

  return (
    <div className={phonebook_container}>
      <h1 className={title}>Phonebook</h1>
      <ContactForm addContact={addContact}/>
      <SearchBox searchContact={setSearchValue}/>
      <ContactList contacts={contacts} deleteContact={deleteContact}/>
    </div>
  )
}

export default App
