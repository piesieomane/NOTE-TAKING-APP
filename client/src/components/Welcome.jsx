import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import './WelcomeStyles.css';

const Welcome = () => {
  const dispatch = useDispatch();

  const [formStates, setFormStates] = useState({ name: '' });

  const changeState = (e) => {
    setFormStates({ ...formStates, [e.target.name]: e.target.value });
  };

  const userState = (e) => {
    e.preventDefault();
    const userFetched = {
      name: formStates.name,
    };
    dispatch(addUser(userFetched));
    setFormStates({ name: '' });
  };
  return (
    <>
      <div className="home">
        <h1 className="home-title">Welcome to Note</h1>
        <p className="home-text">
          Note is a simple note taking app that allows you to create, edit, and
          delete notes.
        </p>
        <p>As a new USER you need to add yourself</p>
        <form onSubmit={userState}>
          <input
            type="text"
            name="name"
            onChange={changeState}
            value={formStates.name}
            placeholder="Enter your name"
          />
          <button type="submit">Add</button>
        </form>
      </div>
    </>
  );
};

export default Welcome;
