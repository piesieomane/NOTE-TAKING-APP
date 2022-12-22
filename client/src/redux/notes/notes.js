import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const ADD_NOTE = 'notes/ADD_NOTE';
const DELETE_NOTE = 'notes/DELETE_NOTE';
const UPDATE_NOTE = 'notes/UPDATE_NOTE';
const GET_NOTES = 'notes/GET_NOTES';

export default (state = [], action) => {
  switch (action.type) {
    case 'notes/ADD_NOTE/fulfilled':
      return [...state, action.payload.notes];
    case 'notes/DELETE_NOTE/fulfilled':
      return state.filter((note) => note.id !== action.payload.id);
    case 'notes/UPDATE_NOTE/fulfilled':
      return state.map((note) =>
        note.id === action.payload.id ? action.payload : note
      );
    case 'notes/GET_NOTES/fulfilled':
      return action.payload.notes;
    default:
      return state;
  }
};

export const fetchNOTES = createAsyncThunk(GET_NOTES, async () => {
  const res = await axios.get('http://localhost:3000/api/notes/');
  return {
    notes: res.data,
  };
});

export const addNOTE = createAsyncThunk(ADD_NOTE, async (note) => {
  try {
    const res = await axios.post('http://localhost:3000/api/notes/', note, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    // if (!res.ok) {
    //   throw new Error('Something went wrong');
    // }
    return {
      notes: res.data,
    };
  } catch (error) {
    const errorMessage = error.response.data.message;
    console.log(errorMessage);
    return;
  }
});

export const deleteNOTE = createAsyncThunk(DELETE_NOTE, async (id) => {
  await axios.delete(`http://localhost:3000/api/notes/${id}`);
  return {
    id,
  };
});

export const updateNOTE = createAsyncThunk(UPDATE_NOTE, async (note) => {
  const res = await axios.put(
    `http://localhost:3000/api/notes/${note.id}`,
    note
  );
  return {
    notes: res.data,
  };
});
