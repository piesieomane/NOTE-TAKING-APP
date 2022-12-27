import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const ADD_NOTE = 'notes/ADD_NOTE';
const DELETE_NOTE = 'notes/DELETE_NOTE';
const UPDATE_NOTE = 'notes/UPDATE_NOTE';
const GET_NOTES = 'notes/GET_NOTES';

const api = import.meta.env.VITE_API_URL;

// console.log(import.meta.env);

export default (state = { notes: [], errorMessage: null }, action) => {
  switch (action.type) {
    case 'notes/ADD_NOTE/fulfilled':
      const errorMessage = action.payload.errorMessage || null;
      return {
        ...state,
        notes: !errorMessage
          ? [...state.notes, action.payload.notes]
          : [...state.notes],
        errorMessage,
      };
    case 'notes/DELETE_NOTE/fulfilled':
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload.id),
        errorMessage: action.payload.errorMessage || null,
      };
    case 'notes/UPDATE_NOTE/fulfilled':
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.payload.id ? action.payload.notes : note
        ),
        errorMessage: action.payload.errorMessage || null,
      };
    case 'notes/GET_NOTES/fulfilled':
      return {
        ...state,
        notes: action.payload.notes,
        errorMessage: action.payload.errorMessage || null,
      };
    default:
      return state;
  }
};

export const fetchNOTES = createAsyncThunk(GET_NOTES, async () => {
  const res = await axios.get(`${api}/api/notes/`);
  return {
    notes: res.data,
  };
});

export const addNOTE = createAsyncThunk(ADD_NOTE, async (note) => {
  try {
    const res = await axios.post(`${api}/api/notes/`, note, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return {
      notes: res.data,
    };
  } catch (error) {
    const errorMessage = error.response.data.message;
    console.log(errorMessage);
    return {
      errorMessage,
    };
  }
});

export const deleteNOTE = createAsyncThunk(DELETE_NOTE, async (id) => {
  await axios.delete(`${api}/api/notes/${id}`);
  return {
    id,
  };
});

export const updateNOTE = createAsyncThunk(UPDATE_NOTE, async (payload) => {
  const { id, noteFetched } = payload;

  try {
    const res = await axios.put(`${api}/api/notes/${id}`, noteFetched);
    return { notes: res.data, id: parseInt(id) };
  } catch (error) {
    const errorMessage = error.response.data.message;
    console.log(errorMessage);
    return { errorMessage };
  }
});
