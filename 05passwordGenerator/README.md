# Password Generator

A React application that generates secure random passwords with customizable options.

## 📋 Description

This project is a password generator that allows users to create secure passwords with customizable length and character options. It demonstrates the use of React hooks like useState, useCallback, useEffect, and useRef.

## 🎯 Features

- Generate random passwords
- Adjustable password length (6-100 characters)
- Optional numbers inclusion
- Optional special characters inclusion
- One-click copy to clipboard
- Real-time password generation

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
  ├── App.jsx       # Main component with password generator logic
  ├── App.css       # Component styles
  ├── main.jsx      # Application entry point
  └── index.css    # Global styles
```

## 💡 Key Concepts Demonstrated

- **useState Hook**: Managing password length, number allowed, character allowed, and password state
- **useCallback Hook**: Memoizing the password generation function
- **useEffect Hook**: Auto-generating password on component mount and when dependencies change
- **useRef Hook**: Referencing the input element for copy functionality
- **Clipboard API**: Copying password to clipboard

## 🎓 Learning Points

1. **React Hooks**: Advanced hook usage (useState, useCallback, useEffect, useRef)
2. **Password Generation**: Random string generation algorithm
3. **User Interaction**: Form controls (range input, checkboxes, buttons)
4. **Browser APIs**: Clipboard API integration

## 🛠️ Technologies

- React 18
- Vite
- ESLint

## 📝 Usage

1. Adjust the password length using the slider (6-100 characters)
2. Toggle "Numbers" checkbox to include numeric characters
3. Toggle "Character" checkbox to include special characters
4. Click "Copy" button to copy the generated password to clipboard
