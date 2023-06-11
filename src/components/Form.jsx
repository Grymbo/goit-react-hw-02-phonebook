import { Component } from "react";
import { nanoid } from "nanoid";
import styles from "../styles/form.module.css";
import ContactList from "./ContactList";
import ContactForm from "./ContactForm";
import Filter from "./Filter";

class Form extends Component  {
    
    state = {
        contacts: [
            {id: 'id-1', name: 'Rosie Simpson',  number: '459-12-56'},
            {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
            {id: 'id-3', name: 'Eden Clements',  number: '645-17-79'},
            {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
        ],
        filter: '',
        name: '',
        number: ''
    }

    // La siguiente función saveData se utiliza para guardar los datos del formulario en el estado del componente.
    saveData = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    // Envia los datos procesados por el usuario
    handleSubmit = (e) => {
        e.preventDefault(); // Previene que la pagina se recarge cuando se envie el formulario

        let userId = nanoid(); // la funcion nanoid() nos genera un ID unico
        const form = e.currentTarget; //Asignamos el elemento del formulario actual a la variable form
        const name = form.elements.name.value;
        const number = form.elements.number.value;
        
        // Verifica  si ya existe un contacto con el mismo nombre
        if (
            this.state.contacts.some(
                (contact) => contact.name.toLowerCase() === name.toLowerCase()
            )
        ) {
            // Nos crea una alerta, avisando la existencia del cobntacto
            alert(`${name} is already in contacts`);
        } else {
            // Crea un nuevo contacto
            const newContact = { number, name, userId };
            
            // Cuando se envia el formulario se limpian los campos
            this.setState((prevState) => ({
                contacts: [...prevState.contacts, newContact],
                name: "",
                number: "",
                userId: "",
            }));
        }
    };

    // Elimina un contacto de nuestro componente
    handleDelete = (id) => {
        // Se filtran los contactos en un nuevo arreglo que excluyen los contactos con userId
        const updateContacts = this.state.contacts.filter((contact) => contact.userId !== id);

        // Actualiza el estado con el nuevo arreglo, lo que efectivamente elimina al contacto deseado
        this.setState({
            contacts: updateContacts,
        });
    };

    // Actualiza el estado del componente con el valor actualizado del campo de búsqueda
    handleSearchChange = (e) => {
        this.setState({ filter: e.target.value }); // Se especifica un objeto con una única propiedad filter, que se actualiza con el valor del campo de búsqueda (e.target.value)
    };
    
    filterContacts = () => {
        const { contacts, filter } = this.state;
        
        return contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));
    };

    render() {
        return (
            <>
                <section className={styles.section}>
                    <ContactForm
                        name={this.state.name}
                        number={this.state.number}
                        saveData={this.saveData}
                        handleSubmit={this.handleSubmit}
                    />
              
                    <div className={styles.contacts__container}>
                        <h2>Contact list</h2>
                
                        {this.state.contacts.length > 0 ? (

                            <>
                                <Filter 
                                    onSearchChange={this.handleSearchChange} 
                                />

                                <ContactList
                                    data={this.filterContacts()}
                                    handleDelete={this.handleDelete}
                                />
                            </>
                        ) : (
                  
                            <h3>No contacts given</h3>
                        )}
                    </div>
                </section>
            </>
        );
    }

}

export default Form