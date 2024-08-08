// backend/src/server.js

const express = require('express');
const { PrismaClient } = require('@prisma/client');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(bodyParser.json());

// Create an admin user (this route is for demo purposes)
app.post('/seed', async (req, res) => {
  try {
    const user = await prisma.user.create({
      data: {
        username: 'admin',
        password: 'hashedpassword', // Replace with a hashed password
        role: 'admin',
        email: 'admin@example.com',
      },
    });

    res.json({ user });
  } catch (error) {
    res.status(500).json({ error: 'Error creating admin user' });
  }
});

app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});
