import React from 'react';

const TaskArea = ({ tasks, moveTask }) => {
  return (
    <div className='flex gap-4'>
      <div className='w-1/3 bg-white border border-gray-300 rounded-lg shadow-md p-4'>
        <h2 className='text-lg font-semibold mb-2'>To-Do</h2>
        {tasks.filter(task => task.status === 'To-Do').map(task => (
          <div key={task.id} className='flex items-center justify-between p-2 border-b border-gray-200'>
            <span>{task.name}</span>
            <select
              value={task.status}
              onChange={(e) => moveTask(task.id, e.target.value)}
              className='ml-2 border border-gray-300 rounded-md bg-white'
            >
              <option value='To-Do'>To-Do</option>
              <option value='Doing'>Doing</option>
              <option value='Done'>Done</option>
            </select>
          </div>
        ))}
      </div>
      <div className='w-1/3 bg-white border border-gray-300 rounded-lg shadow-md p-4'>
        <h2 className='text-lg font-semibold mb-2'>Doing</h2>
        {tasks.filter(task => task.status === 'Doing').map(task => (
          <div key={task.id} className='flex items-center justify-between p-2 border-b border-gray-200'>
            <span>{task.name}</span>
            <select
              value={task.status}
              onChange={(e) => moveTask(task.id, e.target.value)}
              className='ml-2 border border-gray-300 rounded-md bg-white'
            >
              <option value='To-Do'>To-Do</option>
              <option value='Doing'>Doing</option>
              <option value='Done'>Done</option>
            </select>
          </div>
        ))}
      </div>
      <div className='w-1/3 bg-white border border-gray-300 rounded-lg shadow-md p-4'>
        <h2 className='text-lg font-semibold mb-2'>Done</h2>
        {tasks.filter(task => task.status === 'Done').map(task => (
          <div key={task.id} className='flex items-center justify-between p-2 border-b border-gray-200'>
            <span>{task.name}</span>
            <select
              value={task.status}
              onChange={(e) => moveTask(task.id, e.target.value)}
              className='ml-2 border border-gray-300 rounded-md bg-white'
            >
              <option value='To-Do'>To-Do</option>
              <option value='Doing'>Doing</option>
              <option value='Done'>Done</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskArea;
