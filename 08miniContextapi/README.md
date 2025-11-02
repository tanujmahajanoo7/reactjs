# Mini Context API Example

A React application demonstrating the Context API for state management without prop drilling.

## 📋 Description

This project showcases a simple implementation of React Context API. It includes a UserContext that manages user state, which is shared between Login and Profile components without passing props through multiple levels.

## 🎯 Features

- Context API implementation
- User state management
- Login and Profile components
- No prop drilling
- Shared state across components

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
  ├── App.jsx                    # Main App component with Context Provider
  ├── components/
  │   ├── Login.jsx              # Login component
  │   └── Profile.jsx            # Profile component
  ├── context/
  │   ├── UserContext.js        # UserContext definition
  │   └── UserContextProvider.jsx # Context Provider component
  ├── main.jsx                   # Application entry point
  └── index.css                  # Global styles
```

## 💡 Key Concepts Demonstrated

- **Context API**: React's built-in state management solution
- **Context Provider**: Providing context to child components
- **useContext Hook**: Consuming context in child components
- **State Management**: Managing global state without Redux
- **No Prop Drilling**: Avoiding passing props through multiple component levels

## 🎓 Learning Points

1. **Context API**: Understanding React Context API
2. **Provider Pattern**: Creating and using Context Providers
3. **useContext Hook**: Consuming context values
4. **State Sharing**: Sharing state across multiple components
5. **Component Architecture**: Organizing context-related components

## 🛠️ Technologies

- React 18
- Vite
- ESLint

## 📝 How It Works

1. **UserContextProvider** wraps the App components
2. User state is defined in the context
3. **Login** and **Profile** components consume the context using `useContext`
4. State updates in one component reflect in other components consuming the same context

## 🔄 Context Flow

```
UserContextProvider (provides context)
  ├── Login (consumes context)
  └── Profile (consumes context)
```
