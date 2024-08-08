import React, { useState } from 'react';

const DialogBox = ({ isOpen, onClose, onAddTask }) => {
  const [taskName, setTaskName] = useState('');
  const [status, setStatus] = useState('To-Do');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim()) {
      onAddTask({ name: taskName, status });
      setTaskName('');
      setStatus('To-Do');
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center'>
      <div className='bg-white p-6 rounded-lg shadow-lg max-w-sm w-full'>
        <h3 className='text-lg font-semibold mb-4'>Add Task</h3>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label className='block text-sm font-medium mb-1'>Task Name</label>
            <input
              type='text'
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              className='w-full px-3 py-2 border border-gray-300 rounded-md'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-medium mb-1'>Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className='w-full px-3 py-2 border border-gray-300 rounded-md'
            >
              <option value='To-Do'>To-Do</option>
              <option value='Doing'>Doing</option>
              <option value='Done'>Done</option>
            </select>
          </div>
          <div className='flex justify-end gap-2'>
            <button
              type='button'
              onClick={onClose}
              className='px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600'
            >
              Cancel
            </button>
            <button
              type='submit'
              className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
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
