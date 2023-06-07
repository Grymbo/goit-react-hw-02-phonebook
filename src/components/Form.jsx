import React, { Component } from 'react'

class Form extends Component  {
    
    state = {
        contacts: [
            {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
            {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
            {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
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
    
}

export default Form