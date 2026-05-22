# Todo App with Redux Toolkit

A React todo application demonstrating Redux Toolkit for state management.

## 📋 Description

This project is a todo application built with Redux Toolkit, showcasing modern Redux patterns. It demonstrates how to set up Redux store, create slices, and use Redux hooks in React components.

## 🎯 Features

- Add new todos
- Display list of todos
- Redux Toolkit state management
- Redux slices for organized state logic
- Modern Redux patterns

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

# Install redux toolkit
npm install @reduxjs/toolkit

# Install react redux
npm install react-redux
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
  ├── App.jsx              # Main App component
  ├── components/
  │   ├── AddTodo.jsx      # Component for adding todos
  │   └── Todos.jsx        # Component for displaying todos
  ├── app/
  │   └── store.js         # Redux store configuration
  ├── features/
  │   └── todo/
  │       └── todoSlice.js # Todo slice with actions and reducers
  ├── main.jsx             # Application entry point with Provider
  ├── App.css              # Component styles
  └── index.css            # Global styles
```

## 💡 Key Concepts Demonstrated

- **Redux Toolkit**: Modern Redux with simplified API
- **Redux Store**: Centralized state management
- **Slices**: Organized state logic with createSlice
- **Actions**: Defined automatically by Redux Toolkit
- **Reducers**: Automatically generated reducers
- **useSelector Hook**: Reading state from Redux store
- **useDispatch Hook**: Dispatching actions

## 🎓 Learning Points

1. **Redux Toolkit**: Setting up Redux Toolkit in React
2. **Store Configuration**: Creating and configuring Redux store
3. **Slices**: Creating slices with createSlice
4. **Provider**: Wrapping app with Redux Provider
5. **Hooks**: Using useSelector and useDispatch hooks
6. **State Management**: Managing application state with Redux

## 🛠️ Technologies

- React 18
- Redux Toolkit
- Vite
- ESLint

## 📚 Redux Toolkit Concepts

### Store
The Redux store holds the application state and is created using `configureStore`.

### Slice
A slice contains the initial state, reducers, and automatically generates action creators. It's created using `createSlice`.

### Actions
Actions are automatically generated from slice reducers. They describe what happened in the application.

### Reducers
Reducers specify how the state changes in response to actions. They're automatically created from slice reducer functions.

## 🔄 Redux Flow

1. **Dispatch Action**: Component dispatches an action using `useDispatch`
2. **Reducer Processes**: Reducer in the slice processes the action
3. **State Updates**: Store state is updated
4. **Components Re-render**: Components using `useSelector` re-render with new state

## 📝 Usage

1. Use **AddTodo** component to add new todos
2. View todos in the **Todos** component
3. All state changes are managed through Redux
4. Components connect to Redux store using hooks
