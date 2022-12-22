import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const ADD_USER = 'users/ADD_USER';
const DELETE_USER = 'users/DELETE_USER';
const UPDATE_USER = 'users/UPDATE_USER';
const GET_USERS = 'users/GET_USERS';

export default (state = [], action) => {
  switch (action.type) {
    case 'users/ADD_USER/fulfilled':
      return [...state, action.payload.users];
    case 'users/DELETE_USER/fulfilled':
      return state.filter((user) => user.id !== action.payload.id);
    case 'users/UPDATE_USER/fulfilled':
      return state.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );
    case 'users/GET_USERS/fulfilled':
      return action.payload.users;
    default:
      return state;
  }
};

export const fetchUSERS = createAsyncThunk(GET_USERS, async () => {
  const res = await axios.get('http://localhost:3000/api/users/');
  return {
    users: res.data,
  };
});

export const addUSER = createAsyncThunk(ADD_USER, async (user) => {
  const res = await axios.post('http://localhost:3000/api/users/', user, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return {
    users: res.data,
  };
});

export const deleteUSER = createAsyncThunk(DELETE_USER, async (id) => {
  await axios.delete(`http://localhost:3000/api/users/${id}`);
  return {
    id,
  };
});

export const updateUSER = createAsyncThunk(UPDATE_USER, async (user) => {
  const res = await axios.put(
    `http://localhost:3000/api/users/${user.id}`,
    user
  );
  return {
    users: res.data,
  };
});
