import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Test = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:3001/api/projects/api'); // Corrected URL
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setError('Failed to load projects');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>User Dashboard</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            {project.name}
            <pre>{JSON.stringify(project.tasks, null, 2)}</pre>
            <p>User IDs: {project.userIds.join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Test;
