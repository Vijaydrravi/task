import React from 'react';

const TaskSummary = ({ tasks }) => {
    if (!Array.isArray(tasks)) {
        console.error('Expected tasks to be an array, but got:', tasks);
        return null; // or return a fallback UI
    }

    const completedTasks = tasks.filter(task => task.status === 'Done');
    const totalTasks = tasks.length;

    return (
        <div>
            <h2>Task Summary</h2>
            <p>Total Tasks: {totalTasks}</p>
            <p>Completed Tasks: {completedTasks.length}</p>
            {/* Render other summaries or breakdowns as needed */}
        </div>
    );
};

export default TaskSummary;
