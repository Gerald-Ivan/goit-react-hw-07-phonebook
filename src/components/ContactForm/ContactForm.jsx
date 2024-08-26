import { useState } from "react";
import { nanoid } from "nanoid";
import css from './contactForm.module.css'
import { PropTypes } from 'prop-types'

export const ContactForm = ({addContact, contacts }) => {
    // state = {
    //     name: '',
    //     number: '',
    //   }
    const [name, setName] = useState('');
    const [ number, setNumber] = useState('');

    const handleChangeName = (e) => {
      setName(e.target.value)
        // this.setState({
        //   name: e.target.value,
        // });
        
      }
    const handleChangeNumber = (e) => {
      setNumber(e.target.value)
        // this.setState({
        //   number: e.target.value,
        // });
      
      }
    const handleSubmit = (e) => {

        e.preventDefault();
        // const { number, name } = this.state;
        if (name.trim() === '' || number.trim() === '') {
          return;
        }
        
        const existingContact = contacts.find( contact => contact.name.toLowerCase() === name.toLocaleLowerCase());

       if (existingContact){
        alert(`${name} is already in contacts`);
        return;
       }

       addContact({
        id: nanoid(),
        name: name.trim(),
        number: number.trim(),
       });

       setName('');
       setNumber('');
      //  this.setState({ name: '', number: '' });
      }
   

      // const {number, name} = this.state;
    return (
      <>
      <h1>Phonebook</h1>
       <form className={css.contactForm} onSubmit={handleSubmit}>
        {/* name */}
      <label className={css.formLabel}>
        <p>Name</p>
        <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
        required
        value={name}
        onChange={handleChangeName}
  
        />     
      </label>
   
      {/* telephone */}
      <label className={css.formLabel}>
        <p>Number</p>
        <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={handleChangeNumber}
        />
      </label>
      {/* submit */}
      <button type="submit" className={css.formBtn}>Add contact</button>
      </form>

      <h2>Contact</h2>
      </>
    )
  
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};