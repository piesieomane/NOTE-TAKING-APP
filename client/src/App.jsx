import React from 'react';
import '../src/css/main.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Welcome from './components/Welcome';

import NotesHolder from './components/NotesHolder';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/notes" element={<NotesHolder />} />
      </Routes>
    </div>
  );
};

export default App;
