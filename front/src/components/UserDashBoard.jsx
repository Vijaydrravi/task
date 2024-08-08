import React, { useState } from 'react';
import Sidebar from './Sidebar';
import ProjectTable from './ProjectTable';
import TaskArea from './TaskArea'; 
import TaskSummary from './TaskSummary';
import DialogBox from './DialogBox';
import UserDetails from './UserDetails';

const UserDashBoard = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: 'Project Alpha',
      tasks: [
        { id: 1, name: 'Task 1', status: 'To-Do' },
        { id: 2, name: 'Task 2', status: 'Doing' },
        { id: 3, name: 'Task 3', status: 'Done' },
      ],
    },
    {
      id: 2,
      name: 'Project Beta',
      tasks: [
        { id: 4, name: 'Task 4', status: 'To-Do' },
        { id: 5, name: 'Task 5', status: 'Done' },
      ],
    },
  ]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [view, setView] = useState('projects');

  const handleProjectClick = (projectId) => {
    const project = projects.find(p => p.id === projectId);
    setSelectedProject(project);
    setView('tasks');
  };

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  const addTask = (task) => {
    const updatedProjects = projects.map(project =>
      project.id === selectedProject.id
        ? { ...project, tasks: [...project.tasks, { ...task, id: Date.now() }] }
        : project
    );
    setProjects(updatedProjects);
    setSelectedProject(updatedProjects.find(p => p.id === selectedProject.id));
    closeDialog();
  };

  const moveTask = (id, newStatus) => {
    const updatedProjects = projects.map(project => ({
      ...project,
      tasks: project.tasks.map(task =>
        task.id === id ? { ...task, status: newStatus } : task
      ),
    }));
    setProjects(updatedProjects);
    setSelectedProject(updatedProjects.find(p => p.id === selectedProject.id));
  };

  return (
    <>
      <div className='flex'>
        <div className='w-1/5 fixed top-0 left-0 h-screen bg-gray-100 border-r border-gray-200'>
          <UserDetails />
          <Sidebar setView={setView} />
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
          {view === 'projects' && (
            <ProjectTable
              projects={projects}
              onProjectClick={handleProjectClick}
            />
          )}
          {view === 'tasks' && selectedProject && (
            <>
              <TaskSummary tasks={selectedProject.tasks} />
              <TaskArea tasks={selectedProject.tasks} moveTask={moveTask} />
            </>
          )}
        </div>
      </div>
      <DialogBox isOpen={isDialogOpen} onClose={closeDialog} onAddTask={addTask} />
    </>
  );
};

export default UserDashBoard;
