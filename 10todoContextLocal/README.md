# Todo App with Context API and Local Storage

A React todo application that uses Context API for state management and local storage for data persistence.

## 📋 Description

This project is a full-featured todo application that demonstrates Context API for state management and localStorage for persisting data. Users can add, update, delete, and mark todos as complete, with all data saved to browser local storage.

## 🎯 Features

- Add new todos
- Update existing todos
- Delete todos
- Toggle todo completion status
- Data persistence with localStorage
- Context API for state management
- Clean, modern UI

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm

### Installation

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

The app will open at `http://localhost:5173` (or another port if 5173 is busy).

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 🏗️ Project Structure

```
src/
  ├── App.jsx                # Main App component with todo logic
  ├── components/
  │   ├── TodoForm.jsx       # Form component for adding/editing todos
  │   ├── TodoItem.jsx       # Individual todo item component
  │   └── index.js           # Component exports
  ├── contexts/
  │   ├── TodoContext.js     # Todo context definition
  │   └── index.js           # Context exports
  ├── main.jsx               # Application entry point
  ├── App.css                # Component styles
  └── index.css              # Global styles
```

## 💡 Key Concepts Demonstrated

- **Context API**: Managing todo state globally
- **localStorage**: Persisting data in browser storage
- **useState Hook**: Managing todos array
- **useEffect Hook**: Loading from and saving to localStorage
- **CRUD Operations**: Create, Read, Update, Delete functionality
- **Component Composition**: Reusable TodoForm and TodoItem components

## 🎓 Learning Points

1. **State Management**: Using Context API instead of prop drilling
2. **Data Persistence**: Saving and loading data from localStorage
3. **CRUD Operations**: Implementing full CRUD functionality
4. **useEffect**: Using useEffect for side effects (localStorage)
5. **Component Design**: Building reusable form and item components

## 🛠️ Technologies

- React 18
- Vite
- Tailwind CSS
- ESLint

## 📝 Features Breakdown

### Add Todo
- Create new todo items with a form
- Each todo has a unique ID

### Update Todo
- Edit existing todo items
- Update todo content

### Delete Todo
- Remove todos from the list
- Updates persist in localStorage

### Toggle Complete
- Mark todos as complete/incomplete
- Visual indication of completion status

### Local Storage
- Todos are automatically saved to localStorage
- Data persists across browser sessions
- Data loads on component mount

## 💾 Data Persistence

Todos are stored in browser localStorage and automatically:
- Save when todos are added, updated, or deleted
- Load when the application starts
- Persist across browser sessions
