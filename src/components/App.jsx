
import { Form } from './Form/Form';
import { Phonebook, Contacts } from './App.styled';
import { ContactList } from './Contact-List/Contact-list';
// const CONTACTS = JSON.parse(window.localStorage.getItem('contacts')) ?? [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

export const App = () => {
  return (
    <Phonebook>
      <h2>Phonebook</h2>
      <Contacts>
        <Form />
        <ContactList  />
      </Contacts>
    </Phonebook>
  );
};
