import React from "react";

export const ContactForm = ({
  currentName,
  setCurrentName,
  currentPhone,
  setCurrentPhone,
  currentEmail,
  setCurrentEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input 
        type='text'
        name='name'
        value={currentName}
        onChange={(e) => setCurrentName(e.target.value)}
        required
        placeholder='Name' 
        />
      </label>
      <br />
      <label>
        <input 
        type='tel'
        name='phone'
        value={currentPhone}
        onChange={(e) => setCurrentPhone(e.target.value)}
        // required
        // pattern="[1-9][0-9]{2}[1-9][0-9]{2}[0-9]{4}"
        placeholder='Phone' 
        />
      </label>
      <br />
      <label>
        <input 
        type='email'
        name='email'
        value={currentEmail}
        onChange={(e) => setCurrentEmail(e.target.value)}
        required
        placeholder='Email' 
        />
      </label>
      <br />
      <input type="submit" value='Add Contact' />
    </form>
  );
};
