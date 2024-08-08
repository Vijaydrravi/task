// DashboardSummary.jsx
import React from 'react';

const DashboardSummary = ({ projectStats }) => (
  <div className='w-full p-5'>
    <h2 className='text-2xl font-semibold mb-4'>Dashboard Summary</h2>
    <div className='flex gap-4'>
      <div className='bg-white border border-gray-300 rounded-lg shadow-md p-4 flex-1'>
        <h3 className='text-lg font-semibold mb-2'>Total Projects</h3>
        <p className='text-xl'>{projectStats.totalProjects}</p>
      </div>
      <div className='bg-white border border-gray-300 rounded-lg shadow-md p-4 flex-1'>
        <h3 className='text-lg font-semibold mb-2'>Pending Projects</h3>
        <p className='text-xl'>{projectStats.pendingProjects}</p>
      </div>
      <div className='bg-white border border-gray-300 rounded-lg shadow-md p-4 flex-1'>
        <h3 className='text-lg font-semibold mb-2'>Done Projects</h3>
        <p className='text-xl'>{projectStats.doneProjects}</p>
      </div>
    </div>
  </div>
);

export default DashboardSummary;
