import React, { useState, useEffect } from "react";
import { Axios } from "./axiosInstance";
import * as todoAPI from './api/todoAPI';

function App() {

  const [todos, setTodos] = useState([]); 
  const [input, setInput] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);

  const testConnection = async () => {
		try {
			const data = await Axios.get('');
			console.log(data.data);
		} catch (e) {
			console.log(`Error fetching backend server: ${e}`);
		}
	};

  useEffect(() => {
    testConnection();
  }, []);

  useEffect(() => {
    const fetchTodos = async () => {
      const res = await todoAPI.getTodo();
      if (res.success && res.data) {
        setTodos(res.data);
      }
    };
    fetchTodos();
  }, []);

  const handleInput = (e) => {
    setInput(e.target.value);
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmedInput = input.trim();
    if (!trimmedInput) return;
  
    if (isEditing && currentTodo) {
      const res = await todoAPI.editNameTodo(currentTodo.id, trimmedInput);
      if (res.success && res.data) {
        setTodos((prev) =>
          prev.map((todo) => (todo.id === currentTodo.id ? res.data : todo))
        );
      }
      setIsEditing(false);
      setCurrentTodo(null);
    } else {
      const res = await todoAPI.addTodo(trimmedInput);
      if (res.success && res.data) {
        setTodos((prev) => [...prev, res.data]);
      }
    }
  
    setInput("");
  };
  

  const handleEdit = (todoId) => {
    const todo = todos.find(t => t.id === todoId);
    if (!todo) return;
    setIsEditing(true);
    setCurrentTodo(todo);
    setInput(todo.title);
  };
  
  


  const toggleComplete = async (id) => {
    const res = await todoAPI.successTodo(id);
    if (res.success && res.data) {
      setTodos((prev) =>
        prev.map((todo) => (todo.id === id ? res.data : todo))
      );
    }
  };

  const handleDelete = async (id) => {
    const res = await todoAPI.deleteTodo(id);
    if (res.success) {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }
  };

  return (
    <div className="bg-gradient-to-t from-red-200 to-yellow-50 h-screen  flex justify-center items-center w-[100%]">
      <div className="container p-5 shadow-lg rounded-2xl  max-w-[400px] bg-white flex  flex-col">
            <h2 className="text-center text-amber-950 font-bold text-4xl mb-4">TODO LIST</h2>
            <form className="flex justify-center gap-2" onSubmit={handleSubmit}>
              <input
                className="bg-amber-950 rounded-md text-white px-2 py-3 w-[70%]"
                type="text"
                value={input}
                onChange={handleInput}
                placeholder="Enter your task"
              />
              <button className="bg-[#9FD4A3] hover:bg-[#71b075] rounded-md p-3 cursor-pointer   text-amber-950 " type="submit">{isEditing ? "Update task" : "Add task"}</button>
            </form>
            <ul>
              {todos.map((todo) => (
                <li
                  className="flex my-3 justify-between mx-4"
                  key={todo.id}
                  onClick={() => toggleComplete(todo.id)}
      
                >
                  <p className={`text-amber-950 cursor-pointer font-bold ${todo.completed ? "line-through" : ""}`}>
                  {todo.title}
                  </p>
                  <div className="flex gap-3">
                    <button
                    className="bg-yellow-200 rounded-md py-2 px-3 cursor-pointer text-amber-950  hover:bg-yellow-300 "
                    onClick={(e) => 
                      {
                        e.stopPropagation();
                        handleEdit(todo.id);
                      }}>Edit</button>
                    <button
                    className="bg-red-200 rounded-md  py-2 px-3 cursor-pointer text-amber-950  hover:bg-red-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(todo.id);
                    }}>Delete</button>
                  </div>
                </li>
              ))}
            </ul>
            {/* <button onClick={testConnection} className="bg-blue-500 p-2 rounded-md text-white hover:bg-blue-950"> 
              HELLO?
            </button>*/}
      </div>
    </div>
  );
}

export default App;