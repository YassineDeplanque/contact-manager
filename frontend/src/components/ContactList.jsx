import { useEffect, useState } from 'react'
import axios from 'axios'
import './ContactList.css'

function ContactList() {
  const [contacts, setContacts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [editingId, setEditingId] = useState(null);
  const [newNom, setNewNom] = useState('');
  const [newPrenom, setNewPrenom] = useState('');
  const [newEmail, setNewEmail] = useState('');


  useEffect(() => {
    axios.get('http://localhost:3000/contacts')
      .then((res) => {
        setContacts(res.data)
      })
      .catch((err) => {
        setError(err.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/contacts/${id}`)
    .then((res) => {
        setContacts(contacts.filter(c => c.id !== id))
    })
    .catch((err) => {
        setError(err.message)
    })
  }

  const startEditing = (contact) => {
    setEditingId(contact.id);
    setNewNom(contact.nom);
    setNewPrenom(contact.prenom);
    setNewEmail(contact.email);
  };

  const handleEdit = (id) => {
    axios.put(`http://localhost:3000/contacts/${id}`, {
      nom: newNom,
      prenom: newPrenom,
      email: newEmail
    })
    .then(() => {
      setContacts(contacts.map(c => 
        c.id === id ? { ...c, nom: newNom, prenom: newPrenom, email: newEmail } : c
      ));
      setEditingId(null);
    })
    .catch(err => console.error(err));
  };

  if (loading) return <p>Loading...</p>
  if (error) return <p style={{ color: 'red' }}>Erreur : {error}</p>

  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {contacts.map((c) => (
           <li key={c.id}>
          {editingId === c.id ? (
            <>
              <input value={newNom} onChange={e => setNewNom(e.target.value)} />
              <input value={newPrenom} onChange={e => setNewPrenom(e.target.value)} />
              <input value={newEmail} onChange={e => setNewEmail(e.target.value)} />
              <button onClick={() => handleEdit(c.id)}>Save</button>
              <button onClick={() => setEditingId(null)}>Cancel</button>
            </>
          ) : (
            <>
              {c.nom} {c.prenom} - {c.email}
              <button onClick={() => startEditing(c)}>Edit</button>
              <button onClick={() => handleDelete(c.id)}>Delete</button>
            </>
          )}
        </li>
        ))}
      </ul>
    </div>
  )
}

export default ContactList
