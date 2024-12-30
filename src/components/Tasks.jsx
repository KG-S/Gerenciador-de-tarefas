/* eslint-disable react/prop-types */

function Tasks({tasks, onTaskClick, onDeleteClick}) {
  return (
    <div>
      <ul>
        
        {tasks.map((task) => (
          <li key={task.id}>
              <button onClick={() => onTaskClick(task.id)} style={{ outline: 'none', backgroundColor: task.isCompleted ? 'green' : 'red', color: task.isCompleted ? 'white' : 'black' }}>
                  {task.title}
                  
              </button>
              <button onClick={() => onDeleteClick(task.id)} style={{backgroundColor: 'transparent', border: 'none', outline: 'none'}}>X</button>
              
              
              </li>
        ))}
      </ul>
    </div>
    
  );
}

export default Tasks;
