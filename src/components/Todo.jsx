import React, { useRef } from 'react';
import todo_icon from '../assets/todo_icon.png';
import Todoitems from './Todoitems';
import { useEffect } from 'react';

const Todo = () => {
  const [todowork, settodowork] = React.useState([]);
  const inptRef = useRef();

  const add = () => {
    const inputText = inptRef.current.value.trim();

    if (inputText === '') {
      alert('Please enter a task!');
      return;
    }

    const newTask = {
      id: Date.now(),
      text: inputText,
      iscompleted: false,
    };

    settodowork((prev) => [...prev, newTask]);
    inptRef.current.value = '';
  };

  const deletetodo = (id) => {
    settodowork((prevtodo) => {
      return prevtodo.filter((todo) => todo.id !== id);
    });
  };

  const toggle = (id) => {
    settodowork((prevtodo) => {
      return prevtodo.map((todo) => {
        if (todo.id === id) {
          return { ...todo, iscompleted: !todo.iscompleted };
        }

        return todo;
      });
    });
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todowork));
  }, [todowork]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-100 via-purple-100 to-pink-100">
      <div className="max-w-lg w-full p-8 bg-white rounded-2xl shadow-2xl">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-6">
          <img className="w-12 h-12" src={todo_icon} alt="Todo Icon" />
          <h1 className="text-4xl font-bold text-purple-600">Todo-List</h1>
        </div>

        {/* Input and Button */}
        <div className="flex items-center space-x-3 mb-6">
          <input
            ref={inptRef}
            type="text"
            placeholder="Enter your task"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <button
            onClick={add}
            className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg shadow-md hover:scale-105 transition-transform duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-300"
          >
            Add +
          </button>
        </div>

        {/* Todo Items */}
        <div className="space-y-4">
          {todowork.map((item, idx) => (
            <Todoitems
              key={idx}
              text={item.text}
              id={item.id}
              iscompleted={item.iscompleted}
              deletetodo={deletetodo}
              toggle={toggle}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;
