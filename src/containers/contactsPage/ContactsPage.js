import React, {useState, useEffect} from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  const {contacts, addContact} = props;

  const [currentName, setCurrentName] = useState('');
  const [currentPhone, setCurrentPhone] = useState('');
  const [currentEmail, setCurrentEmail] = useState('');

  const [duplicate, setDuplicate] = useState(false);
 
  useEffect(() => {
    checkForDuplicates();
  }, [currentName]);

  const checkForDuplicates = () => {
    if (contacts.length > 0) {
      const duplicates = contacts.filter(contact => contact.name === currentName);
      if (duplicates.length > 0) {
        setDuplicate(true);
      } else {setDuplicate(false);}
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!duplicate) {
      addContact(currentName, currentPhone, currentEmail);
      setCurrentName('');
      setCurrentPhone('');
      setCurrentEmail('');
    }
  };


  
  return (
    <div>
      <section>
        <h2>
          Add Contact
          {duplicate ? " - Name Already Exists" : ""}
        </h2> 
        <ContactForm currentName={currentName} setCurrentName={setCurrentName} currentPhone={currentPhone} setCurrentPhone={setCurrentPhone} currentEmail={currentEmail} setCurrentEmail={setCurrentEmail} handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={contacts} />
      </section>
    </div>
  );
};

