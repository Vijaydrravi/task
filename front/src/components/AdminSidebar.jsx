import React from 'react';

const AdminSidebar = ({ setView }) => {
  return (
    <div className='p-4'>
      <ul>
        <li>
          <button
            onClick={() => setView('projects')}
            className='w-full text-left px-4 py-2 hover:bg-gray-200 rounded'
          >
            Projects
          </button>
        </li>
        <li>
          <button
            onClick={() => setView('create-project')}
            className='w-full text-left px-4 py-2 hover:bg-gray-200 rounded'
          >
            Create Project
          </button>
        </li>
        {/* Add more sidebar items here if needed */}
      </ul>
    </div>
  );
};

export default AdminSidebar;
