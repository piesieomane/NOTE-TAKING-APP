import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNOTE } from '../redux/notes/notes';
import './NotesStyles.css';

const Notes = () => {
  const dispatch = useDispatch();

  const [formStates, setFormStates] = useState({ title: '', content: '' });

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
    console.log(formStates.title, formStates.content, noteFetched);
    setFormStates({ title: '', content: '' });
  };
  return (
    <div className="note">
      <form onSubmit={noteState}>
        <input
          type="text"
          name="title"
          onChange={changeState}
          value={formStates.title}
          placeholder="title...."
        />
        <input
          type="text"
          name="content"
          onChange={changeState}
          value={formStates.content}
          placeholder="Content...."
        />
        <button type="submit"> ADD NOTE</button>
      </form>
    </div>
  );
};

export default Notes;
