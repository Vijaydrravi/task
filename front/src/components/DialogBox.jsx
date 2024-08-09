import React, { useState } from 'react';

const DialogBox = ({ isOpen, onClose, onAddTask }) => {
  const [taskName, setTaskName] = useState('');
  const [taskStatus, setTaskStatus] = useState('To-Do');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName) return;

    const newTask = {
      name: taskName,
      status: taskStatus,
    };

    onAddTask(newTask);
    setTaskName('');
    setTaskStatus('To-Do');
  };

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='bg-white p-5 rounded shadow-lg'>
        <h2 className='text-lg font-bold'>Add Task</h2>
        <form onSubmit={handleSubmit}>
          <div className='mt-2'>
            <label>
              Task Name:
              <input
                type='text'
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                className='border rounded p-1 w-full'
                required
              />
            </label>
          </div>
          <div className='mt-2'>
            <label>
              Status:
              <select
                value={taskStatus}
                onChange={(e) => setTaskStatus(e.target.value)}
                className='border rounded p-1 w-full'
              >
                <option value='To-Do'>To-Do</option>
                <option value='Doing'>Doing</option>
                <option value='Done'>Done</option>
              </select>
            </label>
          </div>
          <div className='flex justify-end mt-4'>
            <button
              type='button'
              onClick={onClose}
              className='mr-2 px-4 py-2 bg-gray-300 rounded'
            >
              Cancel
            </button>
            <button
              type='submit'
              className='px-4 py-2 bg-blue-500 text-white rounded'
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DialogBox;
