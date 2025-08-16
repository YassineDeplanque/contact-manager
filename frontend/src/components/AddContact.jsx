import { useEffect, useState } from 'react'
import axios from 'axios'

function AddContact() {

    const [familyName, setFamilyName] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null)

    const handleSubmit = () => {
        const newContact = {nom: familyName, prenom: name, email: email}
        axios.post('http://localhost:3000/contacts', newContact)
          .then(res => {
            setFamilyName('');
            setName('');
            setEmail('');
          })
          .catch ((err) => {
            setError(err.message)
          })
    }

    return(
        <div>
            <h2>Add a contact</h2>
            <input type='text' placeholder=' Family name' value={familyName} onChange={(e) => setFamilyName(e.target.value)} required />
            <input type='text' placeholder=' Name' value={name} onChange={(e) => setName(e.target.value)} required />
            <input type='text' placeholder=' Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default AddContact