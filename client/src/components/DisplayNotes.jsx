import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteNOTE } from '../redux/notes/notes';

const DisplayNotes = (props) => {
  const dispatch = useDispatch();
  const { title, content, createdAt, updatedAt, id } = props;

  const removeNoteFromList = () => {
    dispatch(deleteNOTE(id));
  };
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <p>{content}</p>
        <p>{createdAt}</p>
        <p>{updatedAt}</p>
      </div>
      <div className="btn_control">
        <button type="button">Edit</button>
        <button type="button" onClick={removeNoteFromList}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default DisplayNotes;
