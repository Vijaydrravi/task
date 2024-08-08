import React from 'react';

const Sidebar = ({ setView }) => {
  return (
    <div className='p-4'>
      <h2 className='text-xl font-semibold mb-4'>Dashboard</h2>
      <ul>
        <li>
          <button
            onClick={() => setView('projects')}
            className='w-full text-left py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200'
          >
            Projects
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
