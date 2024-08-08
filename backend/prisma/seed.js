// prisma/seed.js

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcryptjs');

async function main() {
  const adminPassword = await bcrypt.hash('adminpassword', 10);
  
  await prisma.user.create({
    data: {
      username: "admin",
      password: adminPassword,
      role: "admin",
      email: "admin@example.com",
    }
  });

  // Optionally, create more users, projects, and tasks
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
