import React from 'react';

const TaskArea = ({ tasks, moveTask }) => {
  const statuses = ['To-Do', 'Doing', 'Done'];

  return (
    <div className='flex gap-4'>
      {statuses.map(status => (
        <div key={status} className='w-1/3 bg-white border border-gray-300 rounded-lg shadow-md p-4'>
          <h2 className='text-lg font-semibold mb-2'>{status}</h2>
          {tasks.filter(task => task.status === status).map(task => (
            <div key={task.id} className='flex items-center justify-between p-2 border-b border-gray-200'>
              <span>{task.name}</span>
              <select
                value={task.status}
                onChange={(e) => moveTask(task.id, e.target.value)}
                className='ml-2 border border-gray-300 rounded-md bg-white'
              >
                {statuses.map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TaskArea;
