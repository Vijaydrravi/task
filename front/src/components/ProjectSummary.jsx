import React from 'react';

const ProjectSummary = ({ project }) => {
  const taskCounts = project.tasks.reduce((acc, task) => {
    acc[task.status] = (acc[task.status] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className='bg-white border border-gray-300 rounded-lg shadow-md p-4'>
      <h2 className='text-lg font-semibold mb-2'>Project Summary: {project.name}</h2>
      <div className='grid grid-cols-2 gap-4'>
        <div className='bg-gray-100 p-4 rounded-lg shadow-sm'>
          <h3 className='text-md font-semibold'>To-Do</h3>
          <p className='text-2xl'>{taskCounts['To-Do'] || 0}</p>
        </div>
        <div className='bg-gray-100 p-4 rounded-lg shadow-sm'>
          <h3 className='text-md font-semibold'>Doing</h3>
          <p className='text-2xl'>{taskCounts['Doing'] || 0}</p>
        </div>
        <div className='bg-gray-100 p-4 rounded-lg shadow-sm'>
          <h3 className='text-md font-semibold'>Done</h3>
          <p className='text-2xl'>{taskCounts['Done'] || 0}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectSummary;
