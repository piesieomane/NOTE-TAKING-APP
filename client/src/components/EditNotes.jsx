import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { updateNOTE } from '../redux/notes/notes';
import '../css/EditNotesStyles.css';

const EditNotes = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

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
    console.log(id, noteFetched);
    dispatch(updateNOTE(id, noteFetched));
    setFormStates({ title: '', content: '' });
  };

  return (
    <div className="editNote">
      <h1>EDIT NOTES</h1>
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
        <button type="submit"> EDIT NOTE</button>
      </form>
      {/* <link to="/notes">
        <button type="submit"> CANCEL EDIT</button>
      </link> */}
    </div>
  );
};

export default EditNotes;
