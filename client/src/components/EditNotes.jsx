import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { updateNOTE } from '../redux/notes/notes';
import '../css/EditNotesStyles.css';

const EditNotes = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const notes = useSelector((state) => state.notes.notes);
  const timeoutIdRef = useRef(null);

  const noteBeingEdited = notes.filter((note) => note.id === parseInt(id))[0];
  // console.log(noteBeingEdited);

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
    if (!title.trim() || !title.trim()) return;
    const noteFetched = { title, content };
    // console.log(id, noteFetched);
    david;

    if (timeoutIdRef.current) clearTimeout(timeoutIdRef.current);

    // debounce this operation and only issue the rquest to the serer after 500 miliseconds of inactivity from the keyboard
    // that way we dont have to issue a bunch of requests to the server as the user types.
    const timeoutId = setTimeout(() => {
      dispatch(updateNOTE({ id, noteFetched }));
    }, 500);
    timeoutIdRef.current = timeoutId;
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
