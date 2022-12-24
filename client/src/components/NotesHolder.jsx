import React from 'react';
import { useSelector } from 'react-redux';
import Notes from './Notes';
import '../css/NotesHolderStyles.css';
import DisplayNotes from './DisplayNotes';

const NotesHolder = () => {
  const notes = useSelector((state) => state.notes.notes);
  return (
    <div className="notes">
      <Notes />
      <div className="noteContainer">
        <div className="mission_table">
          {' '}
          <table className="styled-table">
            <thead>
              <tr>
                <th>Notes</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {notes.map((note) => (
                <DisplayNotes
                  key={note.id}
                  id={note.id}
                  title={note.title}
                  content={note.content}
                  createdAt={note.createdAt}
                  updatedAt={note.updatedAt}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default NotesHolder;
