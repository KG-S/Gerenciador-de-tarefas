import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar React",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar inglês",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Estudar Javascript",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskId){
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted};
      }
      return task;
    });
    setTasks(newTasks);


  }

  function onDeleteClick(taskId){
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasks(newTasks);

  }

  function onAddTask(title){
    const newTask = {
      id: tasks.length +1,
      title: title,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }


  return (
    <div className="container">
      <h1 className="title">GERENCIADOR DE TAREFAS</h1>

      <AddTask onAddTask={onAddTask}/>
      <Tasks tasks={tasks}
       onTaskClick={onTaskClick}
       onDeleteClick={onDeleteClick} />
    </div>
  );
}

export default App;
