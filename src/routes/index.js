
import express from 'express';

const router = express.Router();

// Simple test route
router.get('/', (req, res) => {
  res.send('Welcome to Task Manager API');
});

export default router;