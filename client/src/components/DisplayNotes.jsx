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
    // <div className="eachNote">
    //   <div>
    //     <h1>{title}</h1>
    //     <p>{content}</p>
    //     <p>
    //       Created At :
    //       {`${createdAtDate.toDateString()}, ${createdAtDate.toLocaleTimeString()}`}
    //     </p>
    //     <p>
    //       Updated At :
    //       {`${updatedAtDate.toDateString()}, ${updatedAtDate.toLocaleTimeString()} `}
    //     </p>
    //   </div>
    //   <div className="btn_control">
    //     <Link to={`/notes/${id}`}>
    //       <button type="button" className="btn">
    //         Edit
    //       </button>
    //     </Link>
    //     <button type="button" className="btn-red" onClick={removeNoteFromList}>
    //       Delete
    //     </button>
    //   </div>
    // </div>
    <tr>
      <td>
        <h5>{title}</h5>
      </td>
      <td>
        <div className="timeStamp">
          <p className="timeStamp-Created-At">
            Created At :
            {`${createdAtDate.toDateString()}, ${createdAtDate.toLocaleTimeString()}`}
          </p>
          <p className="timeStamp-Updated-At">
            Updated At :
            {`${updatedAtDate.toDateString()}, ${updatedAtDate.toLocaleTimeString()} `}
          </p>
        </div>
        <p>{content}</p>
      </td>
      <td>
        <div className="btn-Control">
          <Link to={`/notes/${id}`}>
            <button type="button" className="edit-btn">
              Edit Note
            </button>
          </Link>
          <button
            type="button"
            className={`delete-btn`}
            onClick={removeNoteFromList}
          >
            Delete Note
          </button>
        </div>
      </td>
    </tr>
  );
};

export default DisplayNotes;
