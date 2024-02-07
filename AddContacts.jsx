import React, { useState } from "react";

const AddContacts = () => {
  const [contactData, setContactData] = useState({ name: "", email: "" });
  const [addedContacts, setAddedContacts] = useState([]);

  const handleChange = (elm) => {
    const { name, value } = elm.target;
    setContactData((prevContact) => ({ ...prevContact, [name]: value }));
  };

  const handleAdd = () => {
    if (contactData.name === "" || contactData.email === "")
    {
      alert("Please enter both name and email");
    }
    else
    {
      setAddedContacts((prevContacts) => [...prevContacts, contactData]);
      console.log("Added Contact:", contactData);
      setContactData({ name: "", email: "" }); // Clear input fields after adding
    }
  };

  return (
    <div className="formHead">
      <h1 className="add-contact">Add Contact</h1>
      <form className="form">
        <div className="inputName">
          <label>Name: </label>
          <input type="text" placeholder="Enter Your Name" name="name" value={contactData.name} onChange={handleChange} className="name"></input>
        </div>
        <br />
        <br />
        <div className="inputEmail">
          <label>E-mail: </label>
          <input type="email" placeholder="Enter Your E-mail" name="email" value={contactData.email} onChange={handleChange} className="email"></input>
        </div>
      </form>
      <button onClick={handleAdd} className="btn">Add Contact</button>

      <div className="addedContacts">
        <h2>Contacts List:</h2>
        <ul>
          {addedContacts.map((contact, index) => (
            <li key={index}>{`${contact.name} - ${contact.email}`}</li>
            ))
        }
        </ul>
      </div>
    </div>
  );
};

export default AddContacts;