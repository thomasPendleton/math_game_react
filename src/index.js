import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GameContextProvider } from "./context/GameContext"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { HighScoresContextProvider } from "./context/HighScoresContext"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <GameContextProvider>
      <HighScoresContextProvider>
        <App />
        <ToastContainer
          position="top-right"
          hideProgressBar
          autoClose={3000}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </HighScoresContextProvider>
    </GameContextProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
