import React, { useState } from 'react';
import PredictionForm from './PredictionForm';
import InformationPage from './InformationPage';
import StatisticsPage from './StatisticsPage';
import ContactPage from './ContactPage';
import Navbar from './Navbar';
import './App.css';

function App() {
  const [activePage, setActivePage] = useState('home');

  const renderPage = () => {
    switch (activePage) {
      case 'info':
        return <InformationPage />;
      case 'stats':
        return <StatisticsPage />;
      case 'contact':
        return <ContactPage />;
      case 'home':
      default:
        return <PredictionForm />;
    }
  };

  return (
    <div className="app-container">
      <Navbar setActivePage={setActivePage} />
      <main className="main-content">
        {renderPage()}
      </main>
      <footer className="footer">
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v7.028C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z"></path></svg>
          </a>
          <a href="mailto:contact@example.com" className="social-icon">
            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"></path></svg>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22.46 6c-.77.35-1.6.58-2.46.67.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.27 0 .34.04.67.11.98-3.56-.18-6.72-1.88-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.48.75 2.79 1.9 3.55-.7-.02-1.37-.22-1.95-.5v.03c0 2.07 1.48 3.8 3.43 4.19-.36.1-.74.15-1.14.15-.28 0-.55-.03-.81-.08.55 1.7 2.13 2.93 4 2.96-1.46 1.14-3.3 1.82-5.3 1.82-.34 0-.68-.02-1.02-.06 1.9 1.22 4.16 1.93 6.56 1.93 7.88 0 12.2-6.52 12.2-12.2 0-.19 0-.37-.01-.56.83-.6 1.56-1.36 2.14-2.23z"></path></svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zm-12 5v10h3V8H7zm11 0v10h3V8h-3zm-5.5 0v10h3V8h-3z"></path></svg>
          </a>
        </div>
        <p>&copy; 2024 Health Predictor. All Rights Reserved. Developed by Rakib.</p>
      </footer>
    </div>
  );
}

export default App;
