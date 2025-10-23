import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Assignment from './models/Assignment.js';

dotenv.config();

const deleteAssignments = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ MongoDB connected');

    // Delete all assignments
    const res = await Assignment.deleteMany({});
    console.log(`Deleted ${res.deletedCount} assignments`);

    process.exit();
  } catch (err) {
    console.error(' Error deleting assignments:', err.message);
    process.exit(1);
  }
};

deleteAssignments();
