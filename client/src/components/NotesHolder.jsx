import React from 'react';
import { useSelector } from 'react-redux';
import Notes from './Notes';
import './NotesHolderStyles.css';
import DisplayNotes from './DisplayNotes';

const NotesHolder = () => {
  const notes = useSelector((state) => state.notes);

  return (
    <div className="notes">
      <Notes />
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
    </div>
  );
};

export default NotesHolder;
