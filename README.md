# Tenzies 🎲

Tenzies is a fun and interactive dice game built with React. The objective of the game is to roll dice until all of them show the same value. Players can select dice to freeze their values, preventing them from being rolled again.

## Features

- **Interactive Gameplay**: Click on dice to select or deselect them.
- **Dynamic Updates**: Dice values update in real-time with each roll.
- **Winning Condition**: Confetti animation celebrates when all dice match.
- **Responsive Design**: Optimized for various screen sizes.

## How to Play

1. Roll the dice by clicking the "Roll" button.
2. Click on individual dice to freeze their values.
3. Keep rolling until all dice show the same value.
4. Once you win, click "New Game" to start over.

## Technologies Used

- **React**: For building the user interface.
- **Vite**: For fast development and build tooling.
- **CSS**: For styling the components.
- **React Confetti**: For the winning animation.

## Project Structure
```
tenzies/ 
├── src/ 
│ ├── components/ 
│ │ ├── App.jsx # Main app component 
│ │ ├── Header.jsx # Header component 
│ │ ├── Main.jsx # Game logic and UI 
│ │ └── Die.jsx # Individual die component 
│ ├── styles/ # CSS files for styling 
│ └── index.jsx # Entry point for React 
├── index.html # HTML template 
├── vite.config.js # Vite configuration 
├── package.json # Project dependencies and scripts └── README.md # Project documentation
```

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/HP-002/tenzies.git
   cd tenzies
   ```
2. Install dependencies:
    ```
    npm install
    ```
3. Start the development server
    ```
    npm run dev
    ```
4. Open the local host in browser to play

### Scripts
- `npm run dev`: Start the development server.
- `npm run build`: Build the project for production.
- `npm run preview`: Preview the production build.
- `npm run lint`: Run ESLint to check for code quality.
