// components/ContactList.jsx
import { useEffect, useState } from 'react'
import axios from 'axios'

function ContactList() {
  const [contacts, setContacts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    // appel API
    axios.get('http://localhost:3000/contacts')
      .then((res) => {
        setContacts(res.data)   // res.data doit être un tableau [{id, nom, prenom, email}]
      })
      .catch((err) => {
        setError(err.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  if (loading) return <p>Loading...</p>
  if (error) return <p style={{ color: 'red' }}>Erreur : {error}</p>

  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {contacts.map((c) => (
          <li key={c.id}>
            {c.nom} {c.prenom} - {c.email}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ContactList
