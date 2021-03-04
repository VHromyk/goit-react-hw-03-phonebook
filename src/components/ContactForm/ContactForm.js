import React, { Component } from 'react';
import styles from './ContactForm.module.scss';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onChangeInput = event => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  onSubmitForm = event => {
    const { name, number } = this.state;
    const { contacts, addContact } = this.props;
    event.preventDefault();

    const findContact = contacts.find(contact => contact.name === name);
    if (findContact) {
      alert(`${name} is already in the contact`);
    } else if (number.length !== 0) {
      addContact(name, number);
      this.onResetForm();
    }
  };

  onResetForm = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form className={styles.form} onSubmit={this.onSubmitForm}>
        <label className={styles.label}>
          Name
          <input
            className={styles.input}
            name="name"
            value={this.state.name}
            onChange={this.onChangeInput}
          ></input>
        </label>
        <label className={styles.label}>
          Number
          <input
            className={styles.input}
            name="number"
            value={this.state.number}
            onChange={this.onChangeInput}
          ></input>
        </label>
        <button className={styles.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
