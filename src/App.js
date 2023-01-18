import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react'

function App() {
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

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}/> : 'No more tasks.'}
    </div>
  );
}

export default App
