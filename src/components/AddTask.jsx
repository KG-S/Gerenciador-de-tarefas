import { useState } from "react";

// eslint-disable-next-line react/prop-types
function AddTask({onAddTask}) {
  const [title, setTitle] = useState("");
  return(

    <div>
      <input type="text" placeholder="Digite a tarefa" value={title} onChange={(event) => setTitle(event.target.value)}></input>
      <button onClick={() =>{  
        if(!title.trim()){
          return alert("Preencha o título");
        } 
        onAddTask(title); 
        setTitle("");}}  
        style={{float: 'right', marginRight: '5%' ,}}
        >Adicionar</button>
  
    </div>


  );
  
}

export default AddTask;
