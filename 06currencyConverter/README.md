# Currency Converter

A React application for converting currencies with real-time exchange rates.

## 📋 Description

This project is a currency converter that allows users to convert amounts between different currencies. It uses an external API to fetch current exchange rates and demonstrates custom hooks, form handling, and API integration.

## 🎯 Features

- Convert currencies between multiple options
- Real-time exchange rate data
- Swap currencies functionality
- Beautiful UI with backdrop blur effect
- Responsive design

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
  ├── App.jsx              # Main component with currency conversion logic
  ├── components/
  │   ├── InputBox.jsx     # Reusable input component for currency input
  │   └── index.js         # Component exports
  ├── hooks/
  │   └── useCurrencyInfo.js  # Custom hook for fetching currency exchange rates
  ├── App.css              # Component styles
  ├── main.jsx             # Application entry point
  └── index.css            # Global styles
```

## 💡 Key Concepts Demonstrated

- **Custom Hooks**: useCurrencyInfo hook for API data fetching
- **useState Hook**: Managing amount, from currency, to currency, and converted amount
- **API Integration**: Fetching real-time exchange rates
- **Form Handling**: Controlled form inputs
- **Component Reusability**: Reusable InputBox component

## 🎓 Learning Points

1. **Custom Hooks**: Creating and using custom hooks
2. **API Integration**: Fetching and using external API data
3. **State Management**: Managing multiple related state variables
4. **Form Validation**: Handling form submissions and conversions
5. **Currency Exchange**: Understanding exchange rate calculations

## 🛠️ Technologies

- React 18
- Vite
- Tailwind CSS
- ESLint

## 📝 Usage

1. Enter the amount you want to convert
2. Select the "From" currency
3. Select the "To" currency
4. Click "Convert" or use the "Swap" button to switch currencies
5. View the converted amount

## 🌐 API

This project uses a currency exchange rate API to fetch real-time conversion rates. Make sure to check the API endpoint in `hooks/useCurrencyInfo.js`.
