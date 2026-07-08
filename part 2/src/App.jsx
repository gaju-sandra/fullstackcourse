import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={(e) => {
        e.preventDefault()
        if (persons.some(p => p.name === newName)) {
          alert(`${newName} is already added to phonebook`)
          return
        }
        setPersons(persons.concat({ name: newName, number: newNumber, id: persons.length + 1 }))
        setNewName('')
        setNewNumber('')
      }}>
        <div>
          name: <input value={newName} onChange={(e) => setNewName(e.target.value)} />
      
        </div>
        <div>
          numbers : <input value={newNumber} onChange={(e) => setNewNumber(e.target.value)} />
      
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      filter shown with: <input value={search} onChange={(e) => setSearch(e.target.value)} />
      {persons
        .filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
        .map(person => <p key={person.id}>{person.name} {person.number}</p>)}
    </div>
  )
}

export default App