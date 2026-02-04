# Advanced Programming REST API (Video Games)

A RESTful backend API for managing video games, developed as part of the Advanced Programming course.  
The application is built using Node.js, Express and MongoDB Atlas and follows RESTful architecture principles.  
It supports full CRUD functionality and user authentication using JSON Web Tokens (JWT).

---

## Features

- User registration and login
- Authentication using JWT
- Protected API endpoints
- CRUD operations for video games:
  - Create a new game
  - Retrieve all games
  - Retrieve a game by ID
  - Update a game
  - Delete a game

---

## Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JSON Web Token (JWT)

---

## Project Structure
src/
├── app.js
├── server.js
├── config/
│    └── db.js
├── controllers/
│    ├── authController.js
│    └── gameController.js
├── middleware/
│    └── authMiddleware.js
├── models/
│    ├── User.js
│    └── Game.js
└── routes/
├── authRoutes.js
└── gameRoutes.js
---

## Setup & Run (Local Environment)

### Step 1: Install dependencies

```bash

npm install

### Step 2: Create environment variables

Create a .env file in the root directory (this file is not included in the repository):
PORT=5050
MONGODB_URI=YOUR_MONGODB_CONNECTION_STRING
JWT_SECRET=YOUR_SECRET_KEY

### Step 3: Start the server

npm run dev
The server will start on:
http://localhost:5050
API Endpoints

Authentication
POST /api/v1/auth/register – Register a new user
POST /api/v1/auth/login – Login and receive JWT token

Video Games
GET /api/v1/games – Retrieve all games
POST /api/v1/games – Create a new game (protected)
GET /api/v1/games/:id – Retrieve game by ID
PATCH /api/v1/games/:id – Update a game (protected)
DELETE /api/v1/games/:id – Delete a game (protected)

⸻

Notes
The .env file is excluded from the repository for security reasons.
All protected endpoints require a valid JWT token in the Authorization header:
Authorization: Bearer <token>

Author

Charalampos MICHAILIDIS

Advanced Programming – Individual Assignment
Aegean College
