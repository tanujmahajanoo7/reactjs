# Theme Switcher

A React application demonstrating theme switching (light/dark mode) using Context API and Tailwind CSS.

## 📋 Description

This project implements a theme switcher that allows users to toggle between light and dark modes. It uses React Context API for state management and Tailwind CSS for styling with dark mode support.

## 🎯 Features

- Light/Dark theme switching
- Context API for theme management
- Tailwind CSS dark mode support
- Theme persistence
- Smooth theme transitions

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
  ├── App.jsx              # Main App component with theme logic
  ├── components/
  │   ├── Card.jsx         # Card component
  │   └── ThemeBtn.jsx     # Theme toggle button component
  ├── contexts/
  │   └── theme.js         # Theme context definition
  ├── main.jsx             # Application entry point
  ├── App.css              # Component styles
  └── index.css            # Global styles with Tailwind directives
```

## 💡 Key Concepts Demonstrated

- **Context API**: Managing theme state globally
- **useState Hook**: Managing theme mode state
- **useEffect Hook**: Applying theme class to HTML element
- **Tailwind Dark Mode**: Using Tailwind's dark mode classes
- **Dynamic Styling**: Changing styles based on theme

## 🎓 Learning Points

1. **Theme Management**: Implementing theme switching in React
2. **Context API**: Using Context for theme state
3. **DOM Manipulation**: Using useEffect to modify document classes
4. **Tailwind Dark Mode**: Configuring and using Tailwind's dark mode
5. **Component Composition**: Building reusable theme-aware components

## 🛠️ Technologies

- React 18
- Vite
- Tailwind CSS
- ESLint

## 🎨 Theme Implementation

The theme is applied by adding/removing `light` or `dark` classes to the HTML element. Tailwind CSS uses these classes to apply the appropriate theme styles.

## 📝 Usage

Click the theme button to toggle between light and dark modes. The theme is immediately applied to all components.
