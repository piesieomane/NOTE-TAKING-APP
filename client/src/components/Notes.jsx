import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNOTE } from '../redux/notes/notes';
import '../css/NotesStyles.css';

const Notes = () => {
  const dispatch = useDispatch();
  const errorMessage = useSelector((state) => state.notes.errorMessage);

  const [formStates, setFormStates] = useState({ title: '', content: '' });
  const [error, setError] = useState(null);

  const changeState = (e) => {
    e.preventDefault();
    setFormStates({ ...formStates, [e.target.name]: e.target.value });
  };

  const noteState = (e) => {
    e.preventDefault();
    if (!formStates.title.trim() || !formStates.title.trim()) return;
    const noteFetched = {
      title: formStates.title,
      content: formStates.content,
    };
    dispatch(addNOTE(noteFetched));
    setFormStates({ title: '', content: '' });
  };

  return (
    <div className="addNote">
      <div>{errorMessage}</div>
      <form onSubmit={noteState} className="formNote">
        <input
          type="text"
          name="title"
          onChange={changeState}
          className="field"
          value={formStates.title}
          placeholder="title...."
        />
        <input
          type="text"
          name="content"
          className="field"
          onChange={changeState}
          value={formStates.content}
          placeholder="Content...."
        />
        <button type="submit" className="btn">
          {' '}
          ADD NOTE
        </button>
      </form>
    </div>
  );
};

export default Notes;
