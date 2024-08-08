import React, { useState } from 'react';
import AdminSidebar from './AdminSidebar';
import ProjectTable from './ProjectTable';
import ProjectSummary from './ProjectSummary';
import ProjectCreationForm from './ProjectCreationForm'; // Import new component
import UserDetails from './UserDetails'; // For user details in the sidebar

const AdminDashBoard = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [view, setView] = useState('projects'); // Default view
  const [showCreateForm, setShowCreateForm] = useState(false);

  const handleProjectClick = (projectId) => {
    const project = projects.find(p => p.id === projectId);
    setSelectedProject(project);
    setView('project-summary');
  };

  const handleCreateProject = (newProject) => {
    setProjects(prevProjects => [
      ...prevProjects,
      { ...newProject, id: prevProjects.length + 1 }, // Incremental id for simplicity
    ]);
    setView('projects'); // Redirect to projects list after creation
  };

  const getTotalProjects = () => projects.length;
  const getCompletedProjects = () => projects.filter(p => p.status === 'Done').length;
  const getPendingProjects = () => projects.filter(p => p.status !== 'Done').length;

  return (
    <div className='flex'>
      <div className='w-1/5 fixed top-0 left-0 h-screen bg-gray-100 border-r border-gray-200'>
        <UserDetails />
        <AdminSidebar setView={setView} />
      </div>
      <div className='w-4/5 ml-[20vw] flex flex-col min-h-screen p-5'>
        {view === 'create-project' && (
          <ProjectCreationForm onCreate={handleCreateProject} />
        )}
        {view === 'projects' && (
          <>
            <ProjectTable
              projects={projects}
              onProjectClick={handleProjectClick}
            />
            <div className='mt-5'>
              <h2 className='text-lg font-semibold mb-2'>Overall Statistics</h2>
              <div className='bg-white border border-gray-300 rounded-lg shadow-md p-4'>
                <p>Total Projects: {getTotalProjects()}</p>
                <p>Completed Projects: {getCompletedProjects()}</p>
                <p>Pending Projects: {getPendingProjects()}</p>
              </div>
            </div>
          </>
        )}
        {view === 'project-summary' && selectedProject && (
          <ProjectSummary project={selectedProject} />
        )}
      </div>
    </div>
  );
};

export default AdminDashBoard;
