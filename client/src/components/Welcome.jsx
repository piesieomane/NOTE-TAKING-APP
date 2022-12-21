import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import './WelcomeStyles.css';

const Welcome = () => {
  const notes = useSelector((state) => state.notes);

  const handleClick = () => {
    console.log(notes);
  };
  return (
    <>
      <div className="home">
        <h1 className="home-title">Welcome to Note</h1>
        <p className="home-text">
          Note is a simple note taking app that allows you to create, edit, and
          delete notes.
        </p>
      </div>
    </>
  );
};

export default Welcome;
