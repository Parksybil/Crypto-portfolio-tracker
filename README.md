# Crypto Portfolio Tracker

This project is a React application that visualizes a cryptocurrency portfolio.

## Getting Started

These instructions will guide you through setting up the project from scratch and incorporating the existing components.

### Prerequisites

- Node.js (version 12 or later)
- npm (usually comes with Node.js)

### Setting Up the Project

1. Create a new React project
   ```
   npx create-react-app crypto-portfolio-tracker
   cd crypto-portfolio-tracker
   ```

2. Install additional required packages
   ```
   npm install d3
   ```

3. Replace the content of `src/App.js` with the following:
   [Copy the content of your App.js file here]

4. Create a new file `src/components/CryptoSolarSystem.js` and add the following content:
   [Copy the content of your CryptoSolarSystem.js file here]

5. Replace the content of `src/App.css` with the following:
   [Copy the content of your app.css file here]

6. Update `src/index.js` to import the CSS file:
   ```javascript
   import React from 'react';
   import ReactDOM from 'react-dom/client';
   import './App.css';
   import App from './App';

   const root = ReactDOM.createRoot(document.getElementById('root'));
   root.render(
     <React.StrictMode>
       <App />
     </React.StrictMode>
   );
   ```

### Running the application

To start the development server:

```
npm start
```

This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Project Structure

After setup, your project structure should look like this:

```
crypto-portfolio-tracker/
├── node_modules/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── components/
│       └── CryptoSolarSystem.js
├── package.json
└── README.md
```

## Contributing

As this project is in its early stages, contributions are welcome. If you'd like to contribute, please feel free to open an issue or submit a pull request.

## Authors

- Park Sy Bil

## License

This project is licensed under the MIT License.

---

Note: This project is actively under development. More features and documentation will be added soon. If you encounter any issues during setup or running the application, please open an issue on the GitHub repository.
