import mongoose from 'mongoose';

const assignmentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  dueDate: { type: Date, required: true },
  status: { type: String, enum: ['Draft', 'Published', 'Completed'], default: 'Draft' },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

export default mongoose.model('Assignment', assignmentSchema);
