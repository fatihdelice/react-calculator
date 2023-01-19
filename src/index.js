import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';
import { ResultProvider, ProcessProvider, HistoryProvider } from './context/CalculateContext';
import { ModalProvider } from './context/ModalContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider>
    <HistoryProvider>
      <ProcessProvider>
        <ResultProvider>
          <ModalProvider>
            <App />
          </ModalProvider>
        </ResultProvider>
      </ProcessProvider>
    </HistoryProvider>
  </ThemeProvider>
);
