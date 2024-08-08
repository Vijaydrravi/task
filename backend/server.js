const express = require('express');
const { PrismaClient } = require('@prisma/client');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const cors = require('cors');
require('dotenv').config();

const prisma = new PrismaClient();
const app = express();

app.use(express.json());
app.use(cors());

// Register
app.post('/register', async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });
    res.status(201).json(user);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

// Login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({ where: { email } });
  if (user && await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

// Middleware to authenticate JWT
const authenticateJWT = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) return res.sendStatus(403);
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

// Get tasks
app.get('/tasks', authenticateJWT, async (req, res) => {
  const tasks = await prisma.task.findMany({ where: { userId: req.user.userId } });
  res.json(tasks);
});

// Add task
app.post('/tasks', authenticateJWT, async (req, res) => {
  const { name, status } = req.body;
  const task = await prisma.task.create({
    data: {
      name,
      status,
      userId: req.user.userId,
    },
  });
  res.status(201).json(task);
});

// Logout (For the client side, simply clear the token)
app.post('/logout', (req, res) => {
  res.json({ message: 'Logged out' });
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
