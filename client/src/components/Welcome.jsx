import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUSER } from '../redux/users/users';

import './WelcomeStyles.css';

const Welcome = () => {
  const dispatch = useDispatch();

  const [formStates, setFormStates] = useState({ name: '' });

  const changeState = (e) => {
    e.preventDefault();
    setFormStates({ ...formStates, [e.target.name]: e.target.value });
  };

  const userState = (e) => {
    e.preventDefault();
    if (!formStates.name.trim()) return;
    const userFetched = JSON.stringify({
      name: formStates.name,
    });
    dispatch(addUSER(userFetched));
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
