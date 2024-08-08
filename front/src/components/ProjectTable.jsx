import React from 'react';

const ProjectTable = ({ projects, onProjectClick }) => {
  return (
    <div className='bg-white border border-gray-300 rounded-lg shadow-md p-4'>
      <h2 className='text-lg font-semibold mb-2'>Projects</h2>
      <table className='w-full'>
        <thead>
          <tr>
            <th className='border-b py-2 px-4 text-left'>Project Name</th>
            <th className='border-b py-2 px-4 text-left'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map(project => (
            <tr key={project.id}>
              <td className='border-b py-2 px-4'>{project.name}</td>
              <td className='border-b py-2 px-4'>
                <button
                  onClick={() => onProjectClick(project.id)}
                  className='text-blue-500 hover:text-blue-700'
                >
                  View Summary
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectTable;
