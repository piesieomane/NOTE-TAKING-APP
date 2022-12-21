import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const ADD_NOTE = 'notes/ADD_NOTE';
const DELETE_NOTE = 'notes/DELETE_NOTE';
const UPDATE_NOTE = 'notes/UPDATE_NOTE';
const GET_NOTES = 'notes/GET_NOTES';

export default (state = [], action) => {
  switch (action.type) {
    case `ADD_NOTE/${fulfilled}`:
      return [...state, action.payload.notes];
    case `DELETE_NOTE/${fulfilled}`:
      return state.filter((note) => note.id !== action.payload.id);
    case `UPDATE_NOTE/${fulfilled}`:
      return state.map((note) =>
        note.id === action.payload.id ? action.payload : note
      );
    case `GET_NOTES/${fulfilled}`:
      return action.payload.notes;
    default:
      return state;
  }
};

export const fetchNOOTES = createAsyncThunk(GET_NOTES, async () => {
  const res = await axios.get('localhost:3000/api/users/');
  return {
    notes: res.data,
  };
});
