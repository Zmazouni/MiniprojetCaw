import React from "react";
import { useState } from "react";


export default function CreateContact({ addcontact }) {
  const [contact, setcontact] = useState([
    {
      name: "",number: "",email: "",
    },
  ]);
  const handleChange = (event) => {
    setcontact({ ...contact, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addcontact(contact);
  };
  return (
    <div className="home">
      <form  onSubmit={handleSubmit}>
       
        <label>Name Surname : </label>
        <input
          type="text"
          value={contact.name}
          name="name"
          onChange={handleChange}
        ></input>
        <label>Number : </label>
        <input
          type="text"
          value={contact.number}
          name="number"
          onChange={handleChange}
        ></input>
        <label>Email : </label>
        <input
          type="email"
          value={contact.email}
          name="email"
          onChange={handleChange}
        ></input>
        <button
          type="submit"
          className="btn-contact"
        >
          Add
        </button>
      </form>
    </div>
  );
}