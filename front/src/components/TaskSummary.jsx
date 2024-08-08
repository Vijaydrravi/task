import React from 'react';

const TaskSummary = ({ tasks }) => {
  // Calculate task counts
  const getTaskCounts = () => {
    const counts = {
      'To-Do': 0,
      'Doing': 0,
      'Done': 0,
    };

    tasks.forEach(task => {
      counts[task.status] = (counts[task.status] || 0) + 1;
    });

    return counts;
  };

  const { 'To-Do': todoCount, 'Doing': doingCount, 'Done': doneCount } = getTaskCounts();

  return (
    <div className='bg-white border border-gray-300 rounded-lg shadow-md p-4'>
      <h2 className='text-lg font-semibold mb-2'>Task Summary</h2>
      <div className='flex justify-between'>
        <span>To-Do: {todoCount}</span>
        <span>Doing: {doingCount}</span>
        <span>Done: {doneCount}</span>
      </div>
    </div>
  );
};

export default TaskSummary;
