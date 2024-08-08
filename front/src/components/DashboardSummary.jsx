import React from 'react';

const DashboardSummary = ({ projects }) => {
  const totalProjects = projects.length;
  const doneProjects = projects.filter(project => project.status === 'Done').length;
  const todoProjects = projects.filter(project => project.status === 'To-Do').length;

  return (
    <div className='p-4'>
      <h2 className='text-2xl font-semibold mb-4'>Dashboard Summary</h2>
      <div className='flex gap-4'>
        <div className='bg-white border border-gray-300 rounded-lg shadow-md p-4 flex-1'>
          <h3 className='text-lg font-semibold mb-2'>Total Projects</h3>
          <p className='text-3xl'>{totalProjects}</p>
        </div>
        <div className='bg-white border border-gray-300 rounded-lg shadow-md p-4 flex-1'>
          <h3 className='text-lg font-semibold mb-2'>To-Do</h3>
          <p className='text-3xl'>{todoProjects}</p>
        </div>
        <div className='bg-white border border-gray-300 rounded-lg shadow-md p-4 flex-1'>
          <h3 className='text-lg font-semibold mb-2'>Done</h3>
          <p className='text-3xl'>{doneProjects}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardSummary;
