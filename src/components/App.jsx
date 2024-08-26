import { ContactForm } from "./ContactForm/ContactForm"
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";

import { useSelector,useDispatch } from "react-redux";
import { getContacts,getFilter } from "../redux/selectors";
import { addContact,deleteContact } from "../redux/contactsSlice";
import { setFilter } from "../redux/filterSlice";

export const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleaddContact = newContact => {
    dispatch(addContact(newContact));
  };

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const handleFilterChange = filterValue => {
    dispatch(setFilter(filterValue));
  };

  const filterContact = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <>
      <ContactForm addContact={handleaddContact} contacts={contacts}/>
      <Filter filter={filter} changeFilter={handleFilterChange}/>
      <ContactList filterContact={filterContact}
          deleteContact={handleDeleteContact}/>
      
      </>
    )

}
    