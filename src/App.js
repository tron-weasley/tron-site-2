import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import Home from './components/pages/home';
import About from './components/pages/about';
import Discography from './components/pages/discography';
import Shows from './components/pages/shows';
import Store from './components/pages/store';
import Contact from './components/pages/contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Discography />
      <Shows />
      <Store />
      <Contact />
    </div>
  );
}

export default App;
