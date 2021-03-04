import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './styles.css';
import Filter from './components/Filter';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactsList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(contacts);
    if (this.state.contacts.length > 0) {
      this.setState({ contacts: parseContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;
    if (nextContacts !== prevContacts) {
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }
  }

  addContact = (name, number) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };
    this.setState({
      contacts: [contact, ...this.state.contacts],
    });
  };

  changeFilter = event => {
    this.setState({
      filter: event.currentTarget.value,
    });
  };

  normalizedList = () => {
    const { filter, contacts } = this.state;
    const normalized = filter.toLowerCase();
    const filterContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalized),
    );

    return filterContacts;
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    return (
      <div className="phoneBook">
        <h1 className="main-title">Phonebook</h1>
        <ContactForm
          contacts={this.state.contacts}
          addContact={this.addContact}
        />

        <h2 className="second-title">Contacts</h2>
        <ContactList
          value={this.state.filter}
          changeFilter={this.changeFilter}
        />
        <Filter
          list={this.normalizedList()}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
export default App;
