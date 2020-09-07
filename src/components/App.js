import React from 'react';
import '../css/App.css';

// Import Components
// Navbar
import Navbar from './navbar/navbar';
// Landing Homepage
import Landing from './landing/landing'
// Footer
import Footer from './footer/footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Footer />
    </div>
  );
}

export default App;
