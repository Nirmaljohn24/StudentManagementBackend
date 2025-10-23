import mongoose from 'mongoose';

const submissionSchema = new mongoose.Schema({
  assignment: { type: mongoose.Schema.Types.ObjectId, ref: 'Assignment', required: true },
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  answer: { type: String, required: true },
  reviewed: { type: Boolean, default: false },
  submittedAt: { type: Date, default: Date.now },
});

export default mongoose.model('Submission', submissionSchema);
