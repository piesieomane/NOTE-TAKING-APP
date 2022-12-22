import React from 'react';
import '../src/css/main.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import NotesHolder from './components/NotesHolder';
import EditNotes from './components/EditNotes';
import AddNotes from './components/AddNotes';
//import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/notes" element={<NotesHolder />} />
        <Route path="/notes/:id" element={<EditNotes />} />
        <Route path="/add" element={<AddNotes />} />
      </Routes>
    </div>
  );
};

export default App;
