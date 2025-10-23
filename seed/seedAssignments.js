import Assignment from '../models/Assignment.js';

const seedAssignments = async () => {
  try {
    const existing = await Assignment.find({});
    if (existing.length > 0) {
      console.log('Assignments already exist');
      return;
    }

    const assignments = [
      {
        title: 'Math Assignment 1',
        description: 'Solve 10 questions from chapter 1',
        published: true,
      },
      {
        title: 'Science Assignment 1',
        description: 'Write a report on photosynthesis',
        published: true,
      },
    ];

    await Assignment.insertMany(assignments);
    console.log('✅ Assignments seeded successfully');
  } catch (err) {
    console.error(err);
  }
};

export default seedAssignments;
