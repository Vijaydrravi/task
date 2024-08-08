import React from 'react';

const ProjectList = ({ projects }) => {
  return (
    <div className='p-4'>
      <h2 className='text-2xl font-semibold mb-4'>Project List</h2>
      <table className='min-w-full bg-white border border-gray-300'>
        <thead>
          <tr>
            <th className='py-2 px-4 border-b'>Project Name</th>
            <th className='py-2 px-4 border-b'>Description</th>
            <th className='py-2 px-4 border-b'>Status</th>
          </tr>
        </thead>
        <tbody>
          {projects.length === 0 ? (
            <tr>
              <td colSpan='3' className='py-2 px-4 text-center'>No projects available.</td>
            </tr>
          ) : (
            projects.map((project) => (
              <tr key={project.id}>
                <td className='py-2 px-4 border-b'>{project.name}</td>
                <td className='py-2 px-4 border-b'>{project.description}</td>
                <td className='py-2 px-4 border-b'>{project.status}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectList;
