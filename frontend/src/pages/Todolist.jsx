import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import Context from '../Context/Context';

const Todolist = () => {
    const [todos, setTodos] = useState([]);
  
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const {name} = useContext(Context)

    

    useEffect(() => {
      console.log("jdsofjojffj")
        const getTodos = async () => {
           
            const response = await axios.get("http://localhost:3000/api/todo/todos", {
              headers: {Authorization:`Bearer ${localStorage.getItem("token")}`, userId:`${localStorage.getItem("userId")}`},
              
            })
            const data = await response.data.todos;
            setTodos(data)

        };
        getTodos()
    },[])
    console.log("jdsofjojffj")


    const addTask = async () => {
      const userId = localStorage.getItem("userId")
      const responce = await axios.post("http://localhost:3000/api/todo/Addtodos",{title, description},
      {headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}});
      const data = responce.data.todo;
      console.log("fsjfsl")

      let newTodo = [];
      for(let i = 0; i<todos.length; i++) {
        newTodo.push(todos[i]);
      }
      newTodo.push(data);
      setTodos(newTodo);
    }
  return (
    <div>
      {name}
      
      <div>
        <input type="text" placeholder='title' value={title} onChange={(e) => {setTitle(e.target.value)}}/>
        <input type="text" placeholder='description' value={description} onChange={(e) => setDescription(e.target.value)}/>
        <button 
        onClick={addTask}
        className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
border-blue-600
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
  Button
</button>
      </div>
      <div>
      {todos.map((todo) => (
        
        <div key={todo.id}>
          <div>{todo.id}</div>
        <div>{todo.title}</div>
        <div>{todo.description}</div>
        <button type=''></button>
        </div>
      
      ))}
      </div>


    </div>
  )


}

export default Todolist