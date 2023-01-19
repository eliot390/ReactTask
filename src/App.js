import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doc Appointment',
      day: '1/12/23 @ 12:00pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting',
      day: '2/07/23 @ 10:00am',
      reminder: true,
    },
    {
      id: 3,
      text: 'Shopping',
      day: '2/10/23 @ 2:00pm',
      reminder: false,
    },
  ])

  const addTask = (task) => {
    const id = Math.floor(Math.random()*100)
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className='container'>
      <Header 
        onAdd={() => setShowAddTask(!showAddTask)} 
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleReminder}/>)
        : ('No more tasks.')}
    </div>
  );
}

export default App
