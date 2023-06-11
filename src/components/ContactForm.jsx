import React,{ Component } from "react";
import styles from "../styles/contactForm.module.css";

class ContactForm extends Component {

  render() {
    const { name, number, saveData, handleSubmit } = this.props;
    
    return (
      <>
        <div className={styles.form__container}>
          <h1>Phonebook</h1>
          
          <form className={styles.form} onSubmit={handleSubmit}>
            
            <div className={styles.input__container}>
              <label htmlFor="name">Nombre:</label>
              
              <input
                className={styles.input}
                type="text"
                value={name}
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                required
                onChange={saveData}
              />
            </div>
            
            <div className={styles.input__container}>
              <label htmlFor="number">Number:</label>
              <input
                className={styles.input}
                value={number}
                type="text"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                required
                onChange={saveData}
              />
            </div>
            
            <button>Add contact</button>
          </form>  
        </div>
      </>
    );
  }
}

export default ContactForm;