import { useState } from 'react';
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { phonebook_container, title } from './App.module.css'

import defaultContacts from './contacts.json';

function App() {
  const [contacts, setContacts] = useState(defaultContacts)

  return (
    <div className={phonebook_container}>
      <h1 className={title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList contacts={contacts}/>
    </div>
  )
}

export default App
