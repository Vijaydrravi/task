import React from 'react';

const Sidebar = ({ setView }) => {
  return (
    <div className='p-4'>
      <ul>
        <li>
          <button
            onClick={() => setView('summary')}
            className='w-full text-left px-4 py-2 hover:bg-gray-200 rounded'
          >
            Dashboard
          </button>
        </li>
        <li>
          <button
            onClick={() => setView('tasks')}
            className='w-full text-left px-4 py-2 hover:bg-gray-200 rounded'
          >
            Tasks
          </button>
        </li>
        {/* Add more sidebar items here */}
      </ul>
    </div>
  );
};

export default Sidebar;
