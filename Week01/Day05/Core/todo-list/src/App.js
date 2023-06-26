import './App.css';
import AddAssignment from './components/AddAssignment';
import DisplayAssignments from './components/DisplayAssignments';
import { useState } from 'react';

function App() {
  
  const [tasks, setTasks] = useState([
    {
      title: "Get the red belt!",
      done : true
    },
    {
    title : "Get the black belt!",
    done : false
    }
])

  return (
    <div className="App">
        <AddAssignment tasks={tasks} setTasks={setTasks}/>
        {tasks.map((task, index)=>{
          return <DisplayAssignments task={task} key={index} index={index} setTasks={setTasks} tasks={tasks}/>
        })}
        {JSON.stringify(tasks)}
    </div>
  );
}

export default App;
