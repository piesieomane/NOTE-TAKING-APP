import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteNOTE } from '../redux/notes/notes';

const DisplayNotes = (props) => {
  const dispatch = useDispatch();
  const { title, content, createdAt, updatedAt, id } = props;

  const createdAtDate = new Date(createdAt);
  const updatedAtDate = new Date(updatedAt);

  const removeNoteFromList = () => {
    dispatch(deleteNOTE(id));
  };
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <p>{content}</p>
        <p>
          Created At :
          {`${createdAtDate.toDateString()}, ${createdAtDate.toLocaleTimeString()}`}
        </p>
        <p>
          Updated At :
          {`${updatedAtDate.toDateString()}, ${updatedAtDate.toLocaleTimeString()} `}
        </p>
      </div>
      <div className="btn_control">
        <Link to={`/notes/${id}`}>
          <button type="button">Edit</button>
        </Link>
        <button type="button" onClick={removeNoteFromList}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default DisplayNotes;
