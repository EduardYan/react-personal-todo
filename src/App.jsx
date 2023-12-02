// import { CompletedIcon, EditIcon, RemoveIcon } from './components/Icons.jsx'
import { Card } from './components/Card.jsx'
import { AddButton } from './components/AddButton.jsx'
import { useEffect, useState } from 'react'
import './App.css'

export function App () {
  const [tasks, setTask] = useState()
  useEffect(() => {
    localStorage.getItem('tasks')
  }, [])

  return (
    <>
      <h1 className='title'>Tareas Personales</h1>

      <section className='cards-view'>
        {tasks || 'No hay tareas por el momento'}
      </section>

      <AddButton />
    </>

  )
}
