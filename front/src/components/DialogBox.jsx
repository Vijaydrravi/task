import React, { useState } from 'react';

const DialogBox = ({ isOpen, onClose, onAddTask }) => {
  const [taskName, setTaskName] = useState('');
  const [taskStatus, setTaskStatus] = useState('To-Do');

  const handleSubmit = () => {
    onAddTask({ name: taskName, status: taskStatus });
    setTaskName('');
    setTaskStatus('To-Do');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50'>
      <div className='bg-white p-4 rounded-lg shadow-lg'>
        <h3 className='text-lg font-semibold mb-4'>Add New Task</h3>
        <div className='mb-4'>
          <label className='block mb-1'>Task Name</label>
          <input
            type='text'
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            className='w-full border border-gray-300 rounded-md p-2'
          />
        </div>
        <div className='mb-4'>
          <label className='block mb-1'>Status</label>
          <select
            value={taskStatus}
            onChange={(e) => setTaskStatus(e.target.value)}
            className='w-full border border-gray-300 rounded-md p-2'
          >
            <option value='To-Do'>To-Do</option>
            <option value='Doing'>Doing</option>
            <option value='Done'>Done</option>
          </select>
        </div>
        <div className='flex justify-end'>
          <button
            onClick={handleSubmit}
            className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'
          >
            Add Task
          </button>
          <button
            onClick={onClose}
            className='ml-2 bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600'
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DialogBox;
