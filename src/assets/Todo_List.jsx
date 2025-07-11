import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function Todo_List() {
  let [Todos, setTodos] = useState([{task :"sample task" , id : uuidv4() ,isDone : false}]);
  let [newTask, setnewTask] = useState("");
  

  let handleAddButtonTask = () => {
    console.log("button was clicked.");
    // setTodos([...Todos , {task : newTask , id : uuidv4() }]);
    
    setTodos((prevTodos)=>{
      return [...prevTodos , {task : newTask , id : uuidv4() ,isDone :false}]
    });
    setnewTask("");
  };

  let handleNewInputvalue = (event) => {
    // console.log("add input" , event.target.value);
    setnewTask(event.target.value);
  };

  let handleDeleteTask = (id) => {
    // console.log("dlete btn clicked",id);
    // console.log("Todos", Todos);
       setTodos((prevTodos) => Todos.filter((prevTodos) => prevTodos.id != id));
  };

  let handleUpperCase = (id) => {
    setTodos((Todos) => Todos.map((Todos) => {
      if(Todos.id == id){
        return { ...Todos, task : Todos.task.toUpperCase()}
      }else{
        return Todos; 
      }
    }))
  };

  let handleMarkAsDone = (id) => {
    setTodos((Todos) => Todos.map((Todos) => {
      if(Todos.id == id){
        return { ...Todos, isDone :true }
      }else{
        return Todos; 
      }
    }))
  };
  
  
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Task you want to do"
        onChange={handleNewInputvalue}
        value={newTask}
      />
      <br />
      <br />
      <button onClick={handleAddButtonTask}>Add Task</button><br />
      <hr />
      <h4>Task List</h4>
      <ul>
        {Todos.map((todo) => {
          return <li key = {todo.id}>
                     <span style={todo.isDone ? {textDecorationLine : "line-through" , color : "red"} : {}}>{todo.task}</span>
                     &nbsp; &nbsp;&nbsp;&nbsp;   
                     <button onClick={() => handleDeleteTask(todo.id)}>Delete</button>&nbsp;&nbsp; 
                     <button onClick={() => handleUpperCase(todo.id)}>UpperCase </button>&nbsp;&nbsp;
                     <button onClick={() => handleMarkAsDone(todo.id)}>MarkAsDone </button>
                  </li>
        })}
      </ul>
    </div>
  );
}
