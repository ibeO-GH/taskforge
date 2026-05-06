# TaskForge — Multi-Client Task Management System

TaskForge is a full-stack task management system designed to demonstrate how multiple frontend applications can operate on a shared backend architecture.

The system consists of multiple clients (React, Next.js, Vue) that consume a single REST API, enabling consistent business logic, centralized data management, and scalable frontend development.

---

## 🚀 Live System

- 🌐 Landing Page: https://taskforge-eta.vercel.app/
- ⚛️ React App: https://taskforge-react-sable.vercel.app/
- 🔌 API: https://taskforge-api-z21d.onrender.com

---

## 🧠 Core Idea

Instead of building isolated frontend apps, TaskForge explores:

- How different frameworks can share the same backend
- How to centralize business logic and validation
- How to maintain consistency across multiple clients
- How to design scalable frontend + backend systems

This reflects how real-world products are structured.

---

## 🏗️ System Architecture

TaskForge follows a **multi-client architecture**:
React App Next.js App Vue App
\ | /
\ | /
Shared REST API
|
MongoDB Atlas

---

### Key Characteristics

- Single backend serving multiple clients
- Centralized data storage and validation
- Independent frontend implementations
- Scalable and extensible structure

---

## ⚙️ Tech Stack

### Frontend (React — Completed)

- React + TypeScript
- React Query (data fetching & caching)
- Tailwind CSS (UI styling)
- dnd-kit (drag and drop)
- TanStack Router

### Backend

- Node.js
- Express
- MongoDB (Mongoose)
- REST API architecture
- Bulk operations for task reordering

### Planned Clients

- Next.js (SSR + routing patterns)
- Vue (Composition API + reactivity)

---

## ✨ Features

### Task Management

- Create, update, delete tasks
- Status tracking (todo, in-progress, done)
- Priority levels (low, medium, high)

### UI/UX

- Responsive design
- Real-time UI updates via React Query
- Inline editing
- Confirmation flows for destructive actions

### Data Handling

- Persistent storage (MongoDB Atlas)
- Server-side validation
- Optimized querying and sorting

### Advanced Functionality

- Filtering (status + priority)
- Search functionality
- Pagination system
- Drag-and-drop reordering
- Backend-synced ordering using bulk updates

---

## 🔌 API Overview

Base URL: https://taskforge-api-z21d.onrender.com/

---

### Endpoints

| Method | Endpoint       | Description        |
| ------ | -------------- | ------------------ |
| GET    | /tasks         | Fetch all tasks    |
| POST   | /tasks         | Create a task      |
| PUT    | /tasks/:id     | Update a task      |
| DELETE | /tasks/:id     | Delete a task      |
| PUT    | /tasks/reorder | Bulk reorder tasks |

---

## 📦 Repositories

- 🧩 System (Landing): https://github.com/ibeO-GH/taskforge
- ⚛️ React Client: https://github.com/ibeO-GH/taskforge-react
- 🛠 Backend API: https://github.com/ibeO-GH/taskforge-backend

---

## 🧪 Local Development

### Clone Repositories

```bash
git clone https://github.com/ibeO-GH/taskforge
git clone https://github.com/ibeO-GH/taskforge-react
git clone https://github.com/ibeO-GH/taskforge-backend

```

---

## Backend Setup

```bash
cd taskforge-backend
npm install

```

#### Create .env file:

MONGO_URI=your_mongodb_connection_string
PORT=5000

```bash
npm run dev

```

---

## Frontend Setup

```bash
cd taskforge-react
npm install
npm run dev

```

---

## 📈 What This Project Demonstrates

- Designing scalable frontend architectures
- Building and consuming REST APIs
- Managing server-state with React Query
- Structuring multi-client systems
- Handling real-world UI complexity (filters, pagination, drag & drop)
- Deploying full-stack applications (Vercel + Render)

---

## 🔮 Future Improvements

- Complete Next.js and Vue implementations
- Authentication system (JWT)
- Role-based access control
- Real-time updates (WebSockets)
- Offline-first support
- Unit and integration testing

---

## 👤 Author

Okorafor Ibe

- Portfolio: https://ibe-portfolio-tau.vercel.app/
- GitHub: https://github.com/ibeO-GH
- LinkedIn: https://www.linkedin.com/in/okorafor-ibe-1b79192b7/
