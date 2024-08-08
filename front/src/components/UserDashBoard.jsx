import React, { useState } from 'react';
import Sidebar from './Sidebar';
import UserDetails from './UserDetails';
import DialogBox from './DialogBox';
import TaskSummary from './TaskSummary';
import TaskArea from './TaskArea';

const UserDashBoard = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [view, setView] = useState('summary'); // State to manage view

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now() }]);
  };

  const moveTask = (id, newStatus) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, status: newStatus } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <>
      <div className='flex'>
        <div className='w-1/5 fixed top-0 left-0 h-screen bg-gray-100 border-r border-gray-200'>
          <UserDetails />
          <Sidebar setView={setView} /> {/* Pass view setter to Sidebar */}
        </div>
        <div className='w-4/5 ml-[20vw] flex flex-col min-h-screen p-5'>
          <div className='flex justify-end mb-4'>
            {view === 'tasks' && (
              <button
                onClick={openDialog}
                className='flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200'
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 mr-2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <span>Add Task</span>
              </button>
            )}
          </div>
          {view === 'summary' && <TaskSummary tasks={tasks} />}
          {view === 'tasks' && <TaskArea tasks={tasks} moveTask={moveTask} />}
        </div>
      </div>
      <DialogBox isOpen={isDialogOpen} onClose={closeDialog} onAddTask={addTask} />
    </>
  );
};

export default UserDashBoard;
