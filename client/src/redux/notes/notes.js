import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const ADD_NOTE = 'notes/ADD_NOTE';
const DELETE_NOTE = 'notes/DELETE_NOTE';
const UPDATE_NOTE = 'notes/UPDATE_NOTE';
const GET_NOTES = 'notes/GET_NOTES';

export default (state = { notes: [], errorMessage: null }, action) => {
  switch (action.type) {
    case 'notes/ADD_NOTE/fulfilled':
      const errorMessage = action.payload.errorMessage || null;
      console.log({ payload: action.payload });
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
  await axios.delete(`http://localhost:3000/api/notes/${id}`);
  return {
    id,
  };
});

export const updateNOTE = createAsyncThunk(UPDATE_NOTE, async (payload) => {
  console.log({ payload });
  const { id, noteFetched } = payload;
  try {
    const res = await axios.put(
      `http://localhost:3000/api/notes/${id}`,
      noteFetched,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return {
      notes: res.data,
      id: parseInt(id),
    };
  } catch (error) {
    const errorMessage = error.response.data.message;
    console.log(errorMessage);
    return { errorMessage };
  }
  //use fetch instead of axios
  // const res = await fetch(`http://localhost:3000/api/notes/${id}`, {
  //   method: 'PUT',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(note),
  // });
  // const data = await res.json();
  // return {
  //   notes: data,
  //   id: id,
  // };
});
