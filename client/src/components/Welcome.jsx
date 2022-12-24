import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addUSER } from '../redux/users/users';

import '../css/WelcomeStyles.css';

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
        <p className="home-text">As a new USER you need to add yourself</p>
        <p className="home-text">
          Or just move straight to adding a Note{' '}
          <button className="home-btn">
            <Link to="/notes" className="btn-note">
              Add Note
            </Link>
          </button>
        </p>
        <p className="home-text">Please enter your name</p>

        <form onSubmit={userState} className="welcome-form">
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
