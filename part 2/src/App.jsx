import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={(e) => {
        e.preventDefault()
        if (persons.some(p => p.name === newName)) {
          alert(`${newName} is already added to phonebook`)
          return
        }
        setPersons(persons.concat({ name: newName }))
        setNewName('')
      }}>
        <div>
          name: <input value={newName} onChange={(e) => setNewName(e.target.value)} />
      
        </div>
        <div>
          number : <input />
      
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person, i) => <p key={i}>{person.name}</p>)}
    </div>
  )
}

export default App