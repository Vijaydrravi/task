import React, { useState } from 'react';
import Sidebar from './Sidebar';
import ProjectTable from './ProjectTable';
import TaskArea from './TaskArea'; 
import TaskSummary from './TaskSummary';
import DialogBox from './DialogBox';
import UserDetails from './UserDetails';

const UserDashBoard = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isTaskDialogOpen, setIsTaskDialogOpen] = useState(false);
  
  // Initial project state
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
  const [newProjectName, setNewProjectName] = useState('');

  // Handle project click
  const handleProjectClick = (projectId) => {
    const project = projects.find(p => p.id === projectId);
    setSelectedProject(project);
    setView('tasks');
  };

  // Open/Close Project Dialog
  const openProjectDialog = () => setIsDialogOpen(true);
  const closeProjectDialog = () => {
    setIsDialogOpen(false);
    setNewProjectName(''); // Clear project name
  };

  // Create a new project
  const createProject = () => {
    if (newProjectName.trim()) {
      const newProject = {
        id: Date.now(), // Using timestamp as a unique ID
        name: newProjectName,
        tasks: [],
      };
      setProjects([...projects, newProject]);
      closeProjectDialog();
    }
  };

  // Open/Close Task Dialog
  const openTaskDialog = () => setIsTaskDialogOpen(true);
  const closeTaskDialog = () => setIsTaskDialogOpen(false);

  // Add a new task
  const addTask = (task) => {
    const updatedProjects = projects.map(project =>
      project.id === selectedProject.id
        ? { ...project, tasks: [...project.tasks, { ...task, id: Date.now() }] }
        : project
    );
    setProjects(updatedProjects);
    setSelectedProject(updatedProjects.find(p => p.id === selectedProject.id));
    closeTaskDialog();
  };

  // Move a task to a different status
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

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the token from local storage
    window.location.href = '/login'; // Redirect to the login page
  };

  return (
    <>
      <div className='flex'>
        <div className='w-1/5 fixed top-0 left-0 h-screen bg-gray-100 border-r border-gray-200'>
          <UserDetails />
          <Sidebar 
            setView={setView} 
            onLogout={handleLogout} 
            openProjectDialog={openProjectDialog} 
          />
        </div>
        <div className='w-4/5 ml-[20vw] flex flex-col min-h-screen p-5'>
          <div className='flex justify-end mb-4'>
            {view === 'tasks' && (
              <button
                onClick={openTaskDialog}
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
      {/* Dialog for creating a new project */}
      {isDialogOpen && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white p-5 rounded shadow-lg'>
            <h2 className='text-lg font-bold'>Create New Project</h2>
            <input 
              type='text' 
              value={newProjectName} 
              onChange={(e) => setNewProjectName(e.target.value)} 
              placeholder='Project Name' 
              className='border rounded p-2 w-full'
            />
            <div className='flex justify-end mt-4'>
              <button
                onClick={closeProjectDialog}
                className='mr-2 px-4 py-2 bg-gray-300 rounded'
              >
                Cancel
              </button>
              <button
                onClick={createProject}
                className='px-4 py-2 bg-blue-500 text-white rounded'
              >
                Create Project
              </button>
            </div>
          </div>
        </div>
      )}
      <DialogBox isOpen={isTaskDialogOpen} onClose={closeTaskDialog} onAddTask={addTask} />
    </>
  );
};

export default UserDashBoard;
