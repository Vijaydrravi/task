import React from 'react';

const Sidebar = ({ setView, onLogout, openProjectDialog }) => {
  return (
    <div className='p-4 min-h-[100vh] bg-slate-500'>
      <h2 className='text-xl font-semibold mb-4'>Dashboard</h2>
      <ul>
        <li>
          <button
            onClick={openProjectDialog}
            className='w-full text-left py-2 px-4 bg-slate-500 text-white rounded hover:bg-slate-400 transition duration-200'
          >
            Create Project
          </button>
        </li>
        <li>
          <button
            onClick={() => setView('projects')}
            className='w-full text-left py-2 px-4 bg-slate-500 text-white rounded hover:bg-slate-400 transition duration-200'
          >
            Projects
          </button>
        </li>
        <li>
          <div className='w-full flex justify-center'>
            <button
              onClick={onLogout}
              className='py-2 px-4 bg-blue-700 text-center mt-[65vh] text-white rounded hover:bg-slate-400 transition duration-200'
            >
              Logout
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
