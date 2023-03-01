import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const getContactsNames = () => {
    return contacts.map((contact) => contact.name);
  }

  return (
    <form onSubmit={handleSubmit} >
      <label>
        <input 
        type='text'
        name='title'
        value={title}
        required
        onChange={(e)=> setTitle(e.target.value)}
        placeholder='Title'
        />
      </label>
      <br />
      <label>
        <ContactPicker 
        contacts={getContactsNames()} 
        onChange={(e) => setContact(e.target.value)}
        />
      </label>
      <br />
      <label>
        <input
        type='date'
        name='date'
        value={date}
        required
        onChange={(e) => setDate(e.target.value)}
        min={getTodayString()}
        />
      </label>
      <br /> 
      <label>
        <input 
        type='time'
        name='time'
        value={time}
        onChange={(e) => setTime(e.target.value)}
        />
      </label>
      <br />
      <label>
        <input 
        type='submit'
        value='Add Appointment'
        />
      </label>
    </form>
  );
};
