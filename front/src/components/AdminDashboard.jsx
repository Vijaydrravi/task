import React, { useState, useEffect } from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';

// AdminSidebar Component
const AdminSidebar = () => (
  <div className='w-1/5 fixed top-0 left-0 h-screen bg-gray-100 border-r border-gray-200 p-4'>
    <h2 className='text-lg font-semibold mb-4'>Admin Dashboard</h2>
    <nav>
      <ul className='space-y-2'>
        <li>
          <NavLink
            to="/admin/dashboard-summary"
            className={({ isActive }) =>
              `block py-2 px-4 rounded ${isActive ? 'bg-gray-200' : 'hover:bg-gray-200'}`
            }
          >
            Dashboard Summary
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin/create-project"
            className={({ isActive }) =>
              `block py-2 px-4 rounded ${isActive ? 'bg-gray-200' : 'hover:bg-gray-200'}`
            }
          >
            Create Project
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin/project-list"
            className={({ isActive }) =>
              `block py-2 px-4 rounded ${isActive ? 'bg-gray-200' : 'hover:bg-gray-200'}`
            }
          >
            Project List
          </NavLink>
        </li>
      </ul>
    </nav>
  </div>
);

// DashboardSummary Component
const DashboardSummary = ({ projects }) => {
  const totalProjects = projects.length;
  const doneProjects = projects.filter(project => project.status === 'Done').length;
  const pendingProjects = projects.filter(project => project.status === 'To-Do').length;

  return (
    <div className='w-4/5 ml-[20vw] p-5'>
      <h2 className='text-xl font-semibold mb-4'>Dashboard Summary</h2>
      <div className='grid grid-cols-3 gap-4'>
        <div className='bg-white border border-gray-300 rounded-lg shadow-md p-4'>
          <h3 className='text-lg font-semibold'>Total Projects</h3>
          <p className='text-2xl'>{totalProjects}</p>
        </div>
        <div className='bg-white border border-gray-300 rounded-lg shadow-md p-4'>
          <h3 className='text-lg font-semibold'>Projects Done</h3>
          <p className='text-2xl'>{doneProjects}</p>
        </div>
        <div className='bg-white border border-gray-300 rounded-lg shadow-md p-4'>
          <h3 className='text-lg font-semibold'>Projects Pending</h3>
          <p className='text-2xl'>{pendingProjects}</p>
        </div>
      </div>
    </div>
  );
};

// CreateProject Component
const CreateProject = ({ onAddProject }) => {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('To-Do');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProject({ name, status });
    setName('');
    setStatus('To-Do');
  };

  return (
    <div className='w-4/5 ml-[20vw] p-5'>
      <h2 className='text-xl font-semibold mb-4'>Create Project</h2>
      <form onSubmit={handleSubmit} className='bg-white border border-gray-300 rounded-lg shadow-md p-4'>
        <div className='mb-4'>
          <label htmlFor='name' className='block text-sm font-medium mb-1'>Project Name</label>
          <input
            type='text'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='w-full border border-gray-300 rounded-md p-2'
            required
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='status' className='block text-sm font-medium mb-1'>Status</label>
          <select
            id='status'
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className='w-full border border-gray-300 rounded-md p-2'
          >
            <option value='To-Do'>To-Do</option>
            <option value='Doing'>Doing</option>
            <option value='Done'>Done</option>
          </select>
        </div>
        <button
          type='submit'
          className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200'
        >
          Add Project
        </button>
      </form>
    </div>
  );
};

// ProjectList Component
const ProjectList = ({ projects }) => (
  <div className='w-4/5 ml-[20vw] p-5'>
    <h2 className='text-xl font-semibold mb-4'>Project List</h2>
    <div className='bg-white border border-gray-300 rounded-lg shadow-md'>
      <table className='w-full border-collapse'>
        <thead>
          <tr>
            <th className='border-b p-2 text-left'>ID</th>
            <th className='border-b p-2 text-left'>Name</th>
            <th className='border-b p-2 text-left'>Status</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id}>
              <td className='border-b p-2'>{project.id}</td>
              <td className='border-b p-2'>{project.name}</td>
              <td className='border-b p-2'>{project.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

// AdminDashboard Component
const AdminDashboard = () => {
  const [projects, setProjects] = useState([]);
  const [nextId, setNextId] = useState(1);

  // Fetching projects (this would be replaced with real API call)
  useEffect(() => {
    // Simulate fetching projects
    setProjects([
      { id: 1, name: 'Project A', status: 'To-Do' },
      { id: 2, name: 'Project B', status: 'Doing' },
      { id: 3, name: 'Project C', status: 'Done' },
    ]);
    setNextId(4); // Set the next ID based on the fetched data
  }, []);

  const addProject = (project) => {
    setProjects([...projects, { ...project, id: nextId }]);
    setNextId(nextId + 1); // Increment the next ID for the new project
  };

  return (
    <div className='flex'>
      <AdminSidebar />
      <Routes>
        <Route
          path='dashboard-summary'
          element={<DashboardSummary projects={projects} />}
        />
        <Route
          path='create-project'
          element={<CreateProject onAddProject={addProject} />}
        />
        <Route
          path='project-list'
          element={<ProjectList projects={projects} />}
        />
      </Routes>
    </div>
  );
};

export default AdminDashboard;
