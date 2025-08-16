import { useState, useEffect } from 'react';
import axios from 'axios';
import ContactList from "./components/ContactList";
import AddContact from "./components/AddContact";

function App() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchContacts = () => {
    setLoading(true);
    axios.get('http://localhost:3000/contacts')
      .then(res => setContacts(res.data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: 'red' }}>Erreur : {error}</p>;

  return (
    <div>
      <AddContact onAdd={fetchContacts} />
      <ContactList contacts={contacts} setContacts={setContacts} />
    </div>
  );
}

export default App;