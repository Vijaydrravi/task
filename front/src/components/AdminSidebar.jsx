// Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const AdminSidebar = () => (
  <div className='w-1/5 fixed top-0 left-0 h-screen bg-gray-100 border-r border-gray-200 p-4'>
    <h2 className='text-lg font-semibold mb-4'>Admin Dashboard</h2>
    <nav>
      <ul className='space-y-2'>
        <li>
          <Link
            to="/admin/dashboard-summary"
            className='block py-2 px-4 hover:bg-gray-200 rounded'
          >
            Dashboard Summary
          </Link>
        </li>
        <li>
          <Link
            to="/admin/create-project"
            className='block py-2 px-4 hover:bg-gray-200 rounded'
          >
            Create Project
          </Link>
        </li>
        <li>
          <Link
            to="/admin/project-list"
            className='block py-2 px-4 hover:bg-gray-200 rounded'
          >
            Project List
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default AdminSidebar;
