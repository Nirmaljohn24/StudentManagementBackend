import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { getAssignments, submitAssignment, getSubmissions } from '../controllers/studentController.js';

const router = express.Router();

router.get('/assignments', protect, getAssignments);
router.post('/assignments/:id/submit', protect, submitAssignment);
router.get('/submissions', protect, getSubmissions);
router.get('/assignments/:id/submissions', protect, getSubmissions);

export default router;
