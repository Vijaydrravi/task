import React from 'react';

const TaskSummary = ({ tasks }) => {
  const statuses = ['To-Do', 'Doing', 'Done'];
  const counts = statuses.reduce((acc, status) => {
    acc[status] = tasks.filter(task => task.status === status).length;
    return acc;
  }, {});

  return (
    <div className='bg-white border border-gray-300 rounded-lg shadow-md p-4 mb-4'>
      <h2 className='text-lg font-semibold mb-2'>Task Summary</h2>
      <div className='flex justify-between'>
        {statuses.map(status => (
          <div key={status} className='w-1/3 text-center'>
            <h3 className='text-xl font-semibold'>{counts[status]}</h3>
            <p className='text-gray-600'>{status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskSummary;
