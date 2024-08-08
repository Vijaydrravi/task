import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProjectArea = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('/projects');
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };
    fetchProjects();
  }, []);

  const handleProjectClick = async (projectId) => {
    try {
      const response = await axios.get(`/projects/${projectId}/tasks`);
      setTasks(response.data);
      setSelectedProject(projectId);
    } catch (error) {
      console.error('Error fetching project tasks:', error);
    }
  };

  const getTaskCounts = (projectId) => {
    const counts = {
      'To-Do': 0,
      'Doing': 0,
      'Done': 0,
    };

    tasks.forEach(task => {
      if (task.projectId === projectId) {
        counts[task.status] = (counts[task.status] || 0) + 1;
      }
    });

    return counts;
  };

  return (
    <div>
      <div className='bg-white border border-gray-300 rounded-lg shadow-md p-4'>
        <h2 className='text-lg font-semibold mb-2'>Projects</h2>
        <ul>
          {projects.map(project => (
            <li key={project.id} className='mb-2'>
              <button
                onClick={() => handleProjectClick(project.id)}
                className='w-full text-left px-4 py-2 hover:bg-gray-200 rounded'
              >
                {project.name} - To-Do: {getTaskCounts(project.id)['To-Do']}, Doing: {getTaskCounts(project.id)['Doing']}, Done: {getTaskCounts(project.id)['Done']}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {selectedProject && (
        <div className='mt-4'>
          <h2 className='text-lg font-semibold mb-2'>Tasks for Selected Project</h2>
          <ul>
            {tasks.map(task => (
              <li key={task.id} className='mb-2'>
                <div className='flex items-center justify-between p-2 border-b border-gray-200'>
                  <span>{task.name}</span>
                  <span>{task.status}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProjectArea;
