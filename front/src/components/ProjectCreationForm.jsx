import React, { useState } from 'react';

const ProjectCreationForm = ({ onCreate }) => {
  const [projectName, setProjectName] = useState('');
  const [projectStatus, setProjectStatus] = useState('To-Do');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (projectName.trim()) {
      onCreate({ name: projectName, status: projectStatus, tasks: [] }); // Creating project with specified status
      setProjectName('');
      setProjectStatus('To-Do'); // Reset status
    }
  };

  return (
    <div className='bg-white border border-gray-300 rounded-lg shadow-md p-4'>
      <h2 className='text-lg font-semibold mb-2'>Create New Project</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label htmlFor='projectName' className='block text-sm font-medium text-gray-700'>
            Project Name
          </label>
          <input
            type='text'
            id='projectName'
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50'
            required
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='projectStatus' className='block text-sm font-medium text-gray-700'>
            Project Status
          </label>
          <select
            id='projectStatus'
            value={projectStatus}
            onChange={(e) => setProjectStatus(e.target.value)}
            className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50'
          >
            <option value='To-Do'>To-Do</option>
            <option value='Doing'>Doing</option>
            <option value='Done'>Done</option>
          </select>
        </div>
        <button
          type='submit'
          className='w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200'
        >
          Create Project
        </button>
      </form>
    </div>
  );
};

export default ProjectCreationForm;
