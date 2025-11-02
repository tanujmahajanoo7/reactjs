# Counter App - useState Example

A simple counter application demonstrating the useState hook in React.

## 📋 Description

This project is a counter application that allows users to increment and decrement a counter value. It demonstrates basic useState hook usage with conditional state updates.

## 🎯 Features

- Increment counter (with maximum limit of 20)
- Decrement counter (with minimum limit of 0)
- Display current counter value
- Conditional state updates

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
  ├── App.jsx       # Main component with counter logic
  ├── App.css       # Component styles
  ├── main.jsx      # Application entry point
  └── index.css     # Global styles
```

## 💡 Key Concepts Demonstrated

- **useState Hook**: Managing counter state
  ```javascript
  const [counter, setCounter] = useState(0);
  ```
- **Conditional State Updates**: Preventing counter from going below 0 or above 20
- **Event Handlers**: onClick handlers for increment and decrement buttons
- **State Management**: Controlled component state

## 🎓 Learning Points

1. **State Initialization**: Setting initial state value (0)
2. **State Updates**: Using setter function (setCounter)
3. **Conditional Logic**: Adding constraints to state updates
4. **Event Handling**: Connecting UI to state updates

## 🛠️ Technologies

- React 18
- Vite
- ESLint

## 📝 Code Example

```javascript
const addValue = () => {
  if(counter < 20) {
    setCounter(counter + 1);
  }
};

const removeValue = () => {
  if(counter > 0) {
    setCounter(counter - 1);
  }
};
```

