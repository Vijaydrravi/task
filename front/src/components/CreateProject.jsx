// CreateProject.jsx
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const CreateProject = ({ onCreateProject }) => {
  const [project, setProject] = useState({ name: '', status: 'To-Do' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreateProject({ ...project, id: uuidv4() });
    setProject({ name: '', status: 'To-Do' }); // Reset form
  };

  return (
    <div className='w-full p-5'>
      <h2 className='text-2xl font-semibold mb-4'>Create Project</h2>
      <form onSubmit={handleSubmit} className='bg-white border border-gray-300 rounded-lg shadow-md p-4'>
        <div className='mb-4'>
          <label htmlFor='name' className='block text-sm font-medium mb-2'>Project Name</label>
          <input
            id='name'
            name='name'
            type='text'
            value={project.name}
            onChange={handleChange}
            required
            className='w-full px-3 py-2 border border-gray-300 rounded'
          />
        </div>
        <button
          type='submit'
          className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200'
        >
          Create Project
        </button>
      </form>
    </div>
  );
};

export default CreateProject;
