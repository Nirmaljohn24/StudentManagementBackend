import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { createAssignment, updateStatus, deleteAssignment, getSubmissions, markReviewed } from '../controllers/teacherController.js';

const router = express.Router();

router.post('/assignments', protect, createAssignment);
router.patch('/assignments/:id/status', protect, updateStatus);
router.delete('/assignments/:id', protect, deleteAssignment);
router.get('/assignments/:id/submissions', protect, getSubmissions);
router.patch('/assignments/:assignmentId/submissions/:submissionId/review', protect, markReviewed);
router.get('/assignments/:id/submissions', protect, getSubmissions);

export default router;
