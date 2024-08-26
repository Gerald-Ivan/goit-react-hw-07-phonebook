import css from './ContactListItem.module.css'
export const ContactListItem = ({ filteredContact, deleteContact }) => {
    const handleDelete = () => {
        deleteContact(filteredContact.id);
      };

  return (
    <>
        <li className={css.listItem}>
            <p>{filteredContact.name}:</p>
            <p>{filteredContact.number}</p>
            <button onClick={handleDelete}>Delete</button>
        </li>
    </>
  )
}
