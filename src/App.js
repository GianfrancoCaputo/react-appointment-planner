import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  const [appointments, setAppointments] = useState([]);
  const [contacts, setContacts] = useState([]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  const addContact = (name, phone, email) => {
    const newContact = {name: name, phone: phone, email: email};
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };
  
  const addAppointment = (title, contact, date, time) => {
    const newAppointment = {title: title, contact: contact, date: date, time: time}
    setAppointments((prevAppointments) => [...prevAppointments, newAppointment]);
  };

  return (
    <Router>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
            <ContactsPage contacts={contacts} addContact={addContact} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            <AppointmentsPage contacts={contacts} appointments={appointments} addAppointment={addAppointment} />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;

