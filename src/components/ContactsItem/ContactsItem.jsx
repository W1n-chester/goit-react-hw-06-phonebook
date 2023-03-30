import { Contact } from './ContactsItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
export const Item = ({ name, number, id }) => {
  const dispatch = useDispatch()

  return (
    <Contact>
      <span>
        <span>{name}:</span> <span> {number}</span>
      </span>
      <button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </Contact>
  );
};