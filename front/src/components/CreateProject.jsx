import React, { useState } from 'react';

const CreateProject = ({ onAddProject }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('To-Do'); // Default status

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && description) {
      onAddProject({ name, description, status, id: Date.now() });
      setName('');
      setDescription('');
      setStatus('To-Do'); // Reset status to default
    }
  };

  return (
    <div className='p-4'>
      <h2 className='text-2xl font-semibold mb-4'>Create New Project</h2>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
          <label className='block mb-1 font-medium'>Project Name:</label>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='w-full px-3 py-2 border border-gray-300 rounded'
            required
          />
        </div>
        <div>
          <label className='block mb-1 font-medium'>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className='w-full px-3 py-2 border border-gray-300 rounded'
            required
          ></textarea>
        </div>
        <div>
          <label className='block mb-1 font-medium'>Status:</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className='w-full px-3 py-2 border border-gray-300 rounded'
          >
            <option value='To-Do'>To-Do</option>
            <option value='Done'>Done</option>
          </select>
        </div>
        <button
          type='submit'
          className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
        >
          Add Project
        </button>
      </form>
    </div>
  );
};

export default CreateProject;
