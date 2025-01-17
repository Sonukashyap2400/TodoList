import React from 'react'
import tick from '../assets/tick.png'
import delete_icon from '../assets/delete.png'
import not_tick from '../assets/not_tick.png'

const Todoitems = ({ text ,id,iscompleted,deletetodo ,toggle }) => {
  return (
    <div className={`flex items-center justify-between bg-gray-100 p-3 rounded-lg shadow-md mb-3 ${iscompleted ? 'opacity-50' : ''}`}>
    {/* TICK/NOT TICK IMAGE */}
    <img
      onClick={() => {
        toggle(id);
      }}
      className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform"
      src={iscompleted ? tick : not_tick}
      alt="Toggle completion"
    />
  
    {/* TEXT AREA */}
    <p
      className={`text-gray-800 font-medium text-base flex-grow px-4 break-words ${
        iscompleted ? 'line-through text-gray-500' : ''
      }`}
    >
      {text}
    </p>
  
    {/* DELETE ICON */}
    <img
      onClick={() => {
        deletetodo(id);
      }}
      className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform"
      src={delete_icon}
      alt="Delete task"
    />
  </div>
  
  )
}

export default Todoitems
