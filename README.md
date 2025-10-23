#  Student Management System – Backend

This is the **backend** of the Student Management System, built using **Node.js, Express, and MongoDB**.  
It handles authentication, assignment management, and student submissions for the frontend application.

---

##  Features

-  **Teacher Functionality**
  - Create, publish, and complete assignments
  - View and review student submissions

-  **Student Functionality**
  - View published assignments
  - Submit answers before the due date

-  **Authentication**
  - Secure login and registration with JWT tokens

-  **Database**
  - MongoDB for storing users, assignments, and submissions

---

##  Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Mongoose)  
- **Authentication:** JWT (JSON Web Tokens)  
- **Environment Management:** dotenv  

---

##  Installation & Setup

Install dependencies
```bash
npm install
```
---

Run the server

```bash
node server.js
```
---

### API Endpoints

***Auth***

- POST /api/auth/register – Register a new user

- POST /api/auth/login – Login and get JWT token

***Assignments***

- POST /api/teacher/assignments – Create assignment

- GET /api/teacher/assignments – Get all assignments

- PATCH /api/teacher/assignments/:id/status – Update status

- DELETE /api/teacher/assignments/:id – Delete assignment

***Submissions***

- POST /api/student/assignments/:id/submit – Submit answer

- GET /api/teacher/assignments/:id/submissions – Get submissions

- PATCH /api/teacher/assignments/:id/submissions/:sid/review – Mark reviewed

  ---
