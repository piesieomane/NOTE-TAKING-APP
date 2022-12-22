import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { updateNOTE } from '../redux/notes/notes';
import '../css/EditNotesStyles.css';

const EditNotes = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const notes = useSelector((state) => state.notes.notes);

  const noteBeingEdited = notes.filter((note) => note.id === parseInt(id))[0];
  console.log(noteBeingEdited);

  const [formStates, setFormStates] = useState({
    title: noteBeingEdited.title,
    content: noteBeingEdited.content,
  });

  const changeTitle = (e) => {
    e.preventDefault();
    setFormStates({ ...formStates, title: e.target.value });
    submitNote({ title: e.target.value, content: formStates.content });
  };

  const changeContent = (e) => {
    e.preventDefault();
    setFormStates({ ...formStates, content: e.target.value });
    submitNote({ content: e.target.value, title: formStates.title });
  };

  const submitNote = ({ title, content }) => {
    if (!formStates.title.trim() || !formStates.title.trim()) return;
    const noteFetched = {
      title: formStates.title,
      content: formStates.content,
    };
    console.log(id, noteFetched);
    dispatch(updateNOTE({ id, noteFetched }));
  };

  return (
    <div className="editNote">
      <h1>EDIT NOTES</h1>
      <form>
        <input
          type="text"
          name="title"
          onChange={changeTitle}
          value={formStates.title}
          placeholder="title...."
        />
        <input
          type="text"
          name="content"
          onChange={changeContent}
          value={formStates.content}
          placeholder="Content...."
        />
        {/* <button type="submit"> EDIT NOTE</button> */}
      </form>
      {/* <link to="/notes">
        <button type="submit"> CANCEL EDIT</button>
      </link> */}
    </div>
  );
};

export default EditNotes;
