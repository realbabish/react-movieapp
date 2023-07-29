import './App.css';
import React, { useState, useEffect } from 'react';
import { Footer, Contact, Header} from './containers';
import { Aboutme, Navbar } from './components';
import Project from './components/project/Project.jsx'
import constructionIcon from './assets/construction-icon.svg';

function App() {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showLoading ? (
        <div className="loading">
          <img src={constructionIcon} alt="Construction icon" className="loading-icon" />
          <h1>"Pardon our dust! We're jazzing up a section of our website to make it even more awesome. Stay tuned for the funky new features we're cooking up!"</h1>
        </div>
      ) : (
        <div className='App'>
          <div className="gradient__bg">
            <title>Babish</title>
            <Navbar />
            <Header />
          </div>
          <Contact />
          <Aboutme />
          <Project />
          <Footer  />
        </div>
      )}
    </>
  );
}

export default App;
