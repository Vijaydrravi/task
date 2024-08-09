const {PrismaClient} = require('@prisma/client');

const prisma = new PrismaClient();

async function createProject() {
  const newProject = await prisma.project.create({
    data: {
      name: 'Project Alpha',
      tasks: [
        { id: 1, name: 'Task 1', status: 'To-Do' },
        { id: 2, name: 'Task 2', status: 'Doing' },
        { id: 3, name: 'Task 3', status: 'Done' },
      ],
      userIds: ["1", "2", "3"], // Example user IDs (auto-incremented integers)
    },
  });

  console.log('New Project Created:', newProject);
}

createProject()
  .catch(e => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
