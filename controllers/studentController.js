import Assignment from '../models/Assignment.js';
import Submission from '../models/Submission.js';

// Get published assignments
export const getAssignments = async (req, res) => {
  const assignments = await Assignment.find({ status: 'Published' }).sort({ dueDate: 1 });
  res.json(assignments);
};

// Submit assignment
export const submitAssignment = async (req, res) => {
  const { id } = req.params;
  const { answer } = req.body;

  const existing = await Submission.findOne({ assignment: id, student: req.user._id });
  if (existing) return res.status(400).json({ message: 'Already submitted' });

  const submission = await Submission.create({
    assignment: id,
    student: req.user._id,
    answer,
  });

  res.json(submission);
};

// Get student's submissions
export const getSubmissions = async (req, res) => {
  const submissions = await Submission.find({ student: req.user._id }).populate('assignment', 'title description dueDate');
  res.json(submissions);
};

// Get assignment submissions
export const getAssignmentSubmissions = async (req, res) => {
  const submissions = await Submission.find({ assignment: req.params.id }).populate('student', 'email');
  res.json(submissions);
};