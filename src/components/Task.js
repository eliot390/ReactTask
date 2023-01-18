import {IoTrashOutline} from 'react-icons/io5'

const Task = ({task, onDelete}) => {
  return (
    <div className="task">
      <h3>{task.text}{' '} <IoTrashOutline onClick={() => onDelete(task.id)}/></h3>
      <p>{task.day}</p>
    </div>
  )
}

export default Task