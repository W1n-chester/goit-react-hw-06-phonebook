import { useSelector } from 'react-redux';
import { Filter } from '../Filter/Filter';
import { Item } from '../ContactsItem/ContactsItem';
import { Container } from './Contact-List.styled';
export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const normFilter = filter.toLocaleLowerCase();
  console.log(contacts)
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(normFilter)
  );

  return (
    <Container>
      <h2>Contacts</h2>
      <Filter />
      <ul>
        {visibleContacts.map(contact => (
          <li key={contact.id}>
            <Item name={contact.name} number={contact.number} id={contact.id} />
          </li>
        ))}
      </ul>
    </Container>
  );
};
