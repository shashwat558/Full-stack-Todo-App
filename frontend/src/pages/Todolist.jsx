import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import Context from '../Context/Context';

const Todolist = () => {
    const [todos, setTodos] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const {user} = useContext(Context)

    useEffect(() => {
        const getTodos = async () => {
            const response = await axios.get("http://localhost:3000/api/todo/todos", {
              headers: {Authorization:`Bearer ${localStorage.getItem("token")}`}
            })
            const data = await response.json();
            setTodos(data)

        };
        getTodos()
    },[])

    const addTask = async () => {
      
    }
  return (
    <div>
      {user.name}
      {todos.map((todo) => {
        <div>
          <div>{todo.id}</div>
        <div>{todo.title}</div>
        <div>{todo.description}</div>
        <button type=''></button>
        </div>

      })}


    </div>
  )
}

export default Todolist