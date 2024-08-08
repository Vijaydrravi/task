import React from 'react';

const AdminSidebar = ({ setView }) => {
  return (
    <div className='p-4'>
      <button
        onClick={() => setView('dashboardSummary')}
        className='block w-full px-4 py-2 mb-2 bg-blue-500 text-white rounded hover:bg-blue-600'
      >
        Dashboard Summary
      </button>
      <button
        onClick={() => setView('createProject')}
        className='block w-full px-4 py-2 mb-2 bg-green-500 text-white rounded hover:bg-green-600'
      >
        Create Project
      </button>
      <button
        onClick={() => setView('projectList')}
        className='block w-full px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600'
      >
        Project List
      </button>
    </div>
  );
};

export default AdminSidebar;
