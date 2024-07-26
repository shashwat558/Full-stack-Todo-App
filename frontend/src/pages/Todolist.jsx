import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Todolist = () => {
    const [todos, setTodos] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        const getTodos = async () => {
            const response = await axios.get("http://localhost:3000/api/todo/todos", {
              headers: {Authorization:`Bearer ${localStorage.getItem("token")}`}
            })
        }
    })
  return (
    <div></div>
  )
}

export default Todolist