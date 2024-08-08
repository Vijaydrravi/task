import React, { useState } from 'react';

const ProjectDetails = ({ project, onAddTask }) => {
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask) {
      onAddTask(newTask);
      setNewTask('');
    }
  };

  return (
    <div>
      <div className='bg-white border border-gray-300 rounded-lg shadow-md p-4'>
        <h2 className='text-lg font-semibold mb-2'>{project.name}</h2>
        <div className='flex gap-4'>
          <div className='w-1/3 bg-gray-100 border border-gray-300 rounded-lg p-4'>
            <h3 className='font-semibold mb-2'>To-Do</h3>
            {project.tasks.filter(task => task.status === 'To-Do').map(task => (
              <div key={task.id} className='flex items-center justify-between p-2 border-b border-gray-200'>
                <span>{task.name}</span>
              </div>
            ))}
          </div>
          <div className='w-1/3 bg-gray-100 border border-gray-300 rounded-lg p-4'>
            <h3 className='font-semibold mb-2'>Doing</h3>
            {project.tasks.filter(task => task.status === 'Doing').map(task => (
              <div key={task.id} className='flex items-center justify-between p-2 border-b border-gray-200'>
                <span>{task.name}</span>
              </div>
            ))}
          </div>
          <div className='w-1/3 bg-gray-100 border border-gray-300 rounded-lg p-4'>
            <h3 className='font-semibold mb-2'>Done</h3>
            {project.tasks.filter(task => task.status === 'Done').map(task => (
              <div key={task.id} className='flex items-center justify-between p-2 border-b border-gray-200'>
                <span>{task.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className='mt-4'>
          <input
            type='text'
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder='New task name'
            className='border border-gray-300 rounded-lg p-2 w-full'
          />
          <button
            onClick={handleAddTask}
            className='mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
          >
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
