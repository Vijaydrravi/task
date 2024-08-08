// ProjectList.jsx
import React from 'react';

const ProjectList = ({ projects, onStatusChange }) => (
  <div className='w-full p-5'>
    <h2 className='text-2xl font-semibold mb-4'>Project List</h2>
    <table className='w-full bg-white border border-gray-300 rounded-lg shadow-md'>
      <thead>
        <tr className='border-b border-gray-300'>
          <th className='p-2 text-left'>Name</th>
          <th className='p-2 text-left'>Status</th>
          <th className='p-2 text-left'>Actions</th>
        </tr>
      </thead>
      <tbody>
        {projects.map((project) => (
          <tr key={project.id} className='border-b border-gray-200'>
            <td className='p-2'>{project.name}</td>
            <td className='p-2'>
              <select
                value={project.status}
                onChange={(e) => onStatusChange(project.id, e.target.value)}
                className='border border-gray-300 rounded'
              >
                <option value='To-Do'>To-Do</option>
                <option value='Doing'>Doing</option>
                <option value='Done'>Done</option>
              </select>
            </td>
            <td className='p-2'>Actions</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default ProjectList;
