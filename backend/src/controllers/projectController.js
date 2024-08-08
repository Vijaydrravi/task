exports.createProject = async (req, res) => {
    if (req.user.role !== 'ADMIN') return res.sendStatus(403);
  
    const { name } = req.body;
    try {
      const project = await req.prisma.project.create({ data: { name } });
      res.status(201).json(project);
    } catch (error) {
      res.status(500).json({ error: 'Project creation failed' });
    }
  };
  
  exports.assignUserToProject = async (req, res) => {
    if (req.user.role !== 'ADMIN') return res.sendStatus(403);
  
    const { userId, projectId } = req.body;
    try {
      await req.prisma.user.update({
        where: { id: userId },
        data: { projects: { connect: { id: projectId } } }
      });
      res.status(200).json({ message: 'User assigned to project' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to assign user to project' });
    }
  };
  