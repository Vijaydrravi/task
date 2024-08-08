const express = require('express');
const router = express.Router();
const { createProject, assignUserToProject } = require('../controllers/projectController');
const authenticateJWT = require('../middleware/authenticateJWT');

router.post('/', authenticateJWT, createProject);
router.post('/assign', authenticateJWT, assignUserToProject);

module.exports = (prisma) => {
  router.use((req, res, next) => {
    req.prisma = prisma;
    next();
  });
  return router;
};
