import Assignment from '../models/Assignment.js';
import Submission from '../models/Submission.js';

// Create Assignment
export const createAssignment = async (req, res) => {
  const { title, description, dueDate } = req.body;
  const assignment = await Assignment.create({
    title,
    description,
    dueDate,
    createdBy: req.user._id,
  });
  res.json(assignment);
};

// Update status
export const updateStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const assignment = await Assignment.findByIdAndUpdate(id, { status }, { new: true });
  res.json(assignment);
};

// Delete assignment
export const deleteAssignment = async (req, res) => {
  const { id } = req.params;
  const assignment = await Assignment.findById(id);
  if (assignment.status !== 'Draft') return res.status(400).json({ message: 'Cannot delete non-draft assignment' });
  await assignment.deleteOne();
  res.json({ message: 'Deleted successfully' });
};

// Get submissions
export const getSubmissions = async (req, res) => {
  const submissions = await Submission.find({ assignment: req.params.id }).populate('student', 'email');
  res.json(submissions);
};

// Mark reviewed
export const markReviewed = async (req, res) => {
  const { assignmentId, submissionId } = req.params;
  const sub = await Submission.findByIdAndUpdate(submissionId, { reviewed: true }, { new: true });
  res.json(sub);
};
// Get all assignments created by teacher
export const getAssignments = async (req, res) => {
  const assignments = await Assignment.find({ createdBy: req.user._id });
  res.json(assignments);
};