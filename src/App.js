import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import AddContact from "./components/AddContact/AddContact";
import ContactDetail from "./components/ContactDetail/ContactDetail";
import ContactList from "./components/ContactList/ContactList";
import EditContact from "./components/EditContact/EditContact";
import addOneContact from "./services/addContactService";
import deleteOneContact from "./services/deleteContactService";
import getContacts from "./services/getContactService";
import updateContact from "./services/updateContact";

function App() {
  const [contacts, setContacts] = useState([]);
  // const addContactHandler = async (contact) => {
  //   try {
  //     const { data } = await addOneContact(contact);
  //     setContacts([...contacts, data]);
  //   } catch (error) {}

  //   //   const newAdded = {
  //   //     id: Math.ceil(Math.random() * 100),
  //   //     name: contact.name,
  //   //     email: contact.email,
  //   //   };
  //   //   setContacts([...contacts, newAdded]);
  //   // };
  // };
  // const editContactHandler = async (contact, id) => {
  //   try {
  //     await updateContact(id, contact);
  //     const { data } = await getContacts();
  //     setContacts(data);
  //   } catch (error) {}
  // };

  // const deleteContactHandler = async (id) => {
  //   try {
  //     await deleteOneContact(id);
  //     const filteredContacts = contacts.filter((c) => c.id !== id);
  //     setContacts(filteredContacts);
  //   } catch (error) {}
  // };
  // CDM => get data
  // contacts => save
  // useEffect(() => {
  //   // const savedContacts = JSON.parse(localStorage.getItem("contacts"));
  //   // if (savedContacts) setContacts(savedContacts);
  //   const fetchContacts = async () => {
  //     const { data } = await getContacts();
  //     setContacts(data);
  //   };
  //   try {
  //     fetchContacts();
  //   } catch (error) {}
  // }, []);

  return (
    <main className="App">
      <h1>Contact App </h1>
      <Switch>
        <Route path="/edit/:id" component={EditContact} />
        <Route path="/user/:id" component={ContactDetail} />

        <Route path="/add" component={AddContact} />
        <Route path="/" exact component={ContactList} />
      </Switch>
      {/* <AddContact addContactHandler={addContactHandler} /> */}
      {/* <ContactList contacts={contacts} onDelete={deleteContactHandler} /> */}
    </main>
  );
}

export default App;
