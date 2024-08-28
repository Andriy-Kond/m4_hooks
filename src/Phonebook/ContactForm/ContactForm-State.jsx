import { Component } from "react";

class ContactForm extends Component {
  state = { name: "sss", number: "" };

  handleContact = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  clearState = () => this.setState({ name: "", number: "" });

  handleAddContact = e => {
    e.preventDefault();

    this.props.addContact(this.state);
    this.clearState();
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleAddContact}>
        <label>
          Name
          <input
            type="text"
            name="name"
            required
            value={name}
            onChange={this.handleContact}
          />
        </label>

        <label>
          Telephone
          <input
            type="tel"
            name="number"
            required
            value={number}
            onChange={this.handleContact}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
