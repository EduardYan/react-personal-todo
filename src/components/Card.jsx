import { completeTask, editTask, removeTask } from '../utils/task.js'
import { CompletedIcon, EditIcon, RemoveIcon } from './Icons.jsx'

export const Card = ({ title = 'Tarea', subtitle = 'Debo hacer esta tarea' }) => {
  return (
    <div className='card'>
      <div className='text'>
        <span>{title}</span>
        <p className='subtitle'>{subtitle}</p>
      </div>
      <div className='icons'>
        <button className='btn' onClick={completeTask}>
          <CompletedIcon />
        </button>
        <button className='btn' onClick={editTask}>
          <EditIcon />
        </button>
        <button className='btn' onClick={removeTask}>
          <RemoveIcon />
        </button>
      </div>
    </div>

  )
}
