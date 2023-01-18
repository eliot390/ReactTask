import {IoTrashOutline} from 'react-icons/io5'

const Task = ({task, onDelete, onToggle}) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
      <h3>
        {task.text}{' '}
        <IoTrashOutline onClick={() => onDelete(task.id)}/>
      </h3>
      <p>{task.day}</p>
    </div>
  )
}

export default Task