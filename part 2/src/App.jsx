import { useState, useEffect } from 'react'
import axios from 'axios'

const Filter = ({ search, onChange }) => (
  <div>filter shown with: <input value={search} onChange={onChange} /></div>
)

const PersonForm = ({ onSubmit, newName, onNameChange, newNumber, onNumberChange }) => (
  <form onSubmit={onSubmit}>
    <div>name: <input value={newName} onChange={onNameChange} /></div>
    <div>number: <input value={newNumber} onChange={onNumberChange} /></div>
    <div><button type="submit">add</button></div>
  </form>
)

const Person = ({ person }) => <p>{person.name} {person.number}</p>

const Persons = ({ persons, search }) => (
  <div>
    {persons
      .filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
      .map(person => <Person key={person.id} person={person} />)}
  </div>
)

const App = () => {
  const [persons, setPersons] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/persons').then(res => setPersons(res.data))
  }, [])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (persons.some(p => p.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    setPersons(persons.concat({ name: newName, number: newNumber, id: persons.length + 1 }))
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} onChange={(e) => setSearch(e.target.value)} />
      <h3>Add a new</h3>
      <PersonForm
        onSubmit={handleSubmit}
        newName={newName}
        onNameChange={(e) => setNewName(e.target.value)}
        newNumber={newNumber}
        onNumberChange={(e) => setNewNumber(e.target.value)}
      />
      <h3>Numbers</h3>
      <Persons persons={persons} search={search} />
    </div>
  )
}

export default App
