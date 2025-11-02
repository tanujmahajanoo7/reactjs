# React Router Example

A React application demonstrating routing with React Router, including multiple pages and navigation.

## 📋 Description

This project showcases React Router implementation with a multi-page application structure. It includes a Layout component, Header, Footer, and multiple route pages like Home, About, Contact, Github, and User pages.

## 🎯 Features

- Multi-page routing with React Router
- Layout component with Header and Footer
- Multiple routes: Home, About, Contact, Github, User
- Navigation between pages
- Component-based architecture

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
  ├── App.jsx              # Main App component with router setup
  ├── Layout.jsx           # Layout component wrapping routes
  ├── components/
  │   ├── Header/
  │   │   └── Header.jsx  # Header component with navigation
  │   ├── Footer/
  │   │   └── Footer.jsx  # Footer component
  │   ├── Home/
  │   │   └── Home.jsx     # Home page component
  │   ├── About/
  │   │   └── About.jsx    # About page component
  │   ├── Contact/
  │   │   └── Contact.jsx  # Contact page component
  │   ├── Github/
  │   │   └── Github.jsx   # Github page component
  │   └── User/
  │       └── User.jsx     # User page component
  ├── main.jsx             # Application entry point
  ├── App.css              # Component styles
  └── index.css            # Global styles
```

## 💡 Key Concepts Demonstrated

- **React Router**: Client-side routing
- **Route Configuration**: Setting up routes and paths
- **Navigation**: Link components and programmatic navigation
- **Layout Component**: Shared layout across routes
- **Dynamic Routes**: Route parameters (e.g., /user/:id)

## 🎓 Learning Points

1. **Routing**: Setting up React Router in a Vite React app
2. **Navigation**: Using Link and NavLink components
3. **Route Structure**: Organizing routes and components
4. **Layout Patterns**: Creating reusable layout components
5. **Dynamic Routing**: Handling route parameters

## 🛠️ Technologies

- React 18
- React Router
- Vite
- ESLint

## 📝 Routes

- `/` - Home page
- `/about` - About page
- `/contact` - Contact page
- `/github` - Github page
- `/user/:id` - User profile page (dynamic route)

## 📚 React Router Setup

This project uses React Router for client-side routing. Make sure to check the router configuration in the main App.jsx or Layout.jsx file.
