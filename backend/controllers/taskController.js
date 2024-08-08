exports.createTask = async (req, res) => {
    const { title, status, projectId, userId } = req.body;
    try {
      const task = await req.prisma.task.create({
        data: { title, status, projectId, userId }
      });
      res.status(201).json(task);
    } catch (error) {
      res.status(500).json({ error: 'Task creation failed' });
    }
  };
  
  exports.getTasksByProject = async (req, res) => {
    const { projectId } = req.params;
    try {
      const tasks = await req.prisma.task.findMany({ where: { projectId: parseInt(projectId) } });
      res.json(tasks);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve tasks' });
    }
  };
  