import css from './ContactListItem.module.css'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();
  const [isDeleting, setIsDeleting] = useState(false);
  const handleDelete = () => {
    setIsDeleting(true);

    setTimeout(() => {
      dispatch(deleteContact(contact.id));
    });
  };

  return (
    <li className={css.listItem}>
      <p>{contact.name}</p>
      <p>{contact.number}</p>
      <button onClick={handleDelete} disabled={isDeleting}>
       {isDeleting ? 'Deleting...' : 'Delete'}</button>
    </li>
  );
};