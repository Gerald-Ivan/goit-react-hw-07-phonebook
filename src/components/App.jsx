import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoading } from '../redux/selectors';
import { fetchContacts } from '../redux/operations';
import { useEffect } from 'react';
import { TailSpin } from 'react-loader-spinner';

export function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);


  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


    return (
      <div className="container">
        <h1>Phonebook</h1>
        <div className="phonebook-container">
          <div>
          <ContactForm />
          </div>
          <div>
            <h2>Contacts</h2>
            <Filter />
            {isLoading && (
          <TailSpin/>
        )}
            <ContactList />
            
          </div>
        </div>
      </div>
    );

}