const express = require('express');
const router = express.Router();
const { createTask, getTasksByProject } = require('../controllers/taskController');
const authenticateJWT = require('../middleware/authenticateJWT');

router.post('/', authenticateJWT, createTask);
router.get('/:projectId', authenticateJWT, getTasksByProject);

module.exports = (prisma) => {
  router.use((req, res, next) => {
    req.prisma = prisma;
    next();
  });
  return router;
};
