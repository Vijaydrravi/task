import React, { useState } from 'react';
import AdminSidebar from './AdminSidebar';
import DashboardSummary from './DashboardSummary';
import CreateProject from './CreateProject';
import ProjectList from './ProjectList';

const AdminDashboard = () => {
  const [view, setView] = useState('dashboardSummary');
  const [projects, setProjects] = useState([]);

  const addProject = (project) => {
    setProjects([...projects, project]);
    setView('dashboardSummary');
  };

  return (
    <div className='flex'>
      <div className='w-1/5 fixed top-0 left-0 h-screen bg-gray-100 border-r border-gray-200'>
        <AdminSidebar setView={setView} />
      </div>
      <div className='w-4/5 ml-[20vw] flex flex-col min-h-screen p-5'>
        {view === 'dashboardSummary' && <DashboardSummary projects={projects} />}
        {view === 'createProject' && <CreateProject onAddProject={addProject} />}
        {view === 'projectList' && <ProjectList projects={projects} />}
      </div>
    </div>
  );
};

export default AdminDashboard;
