import {
  applyMiddleware,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import notesReducer from './notes/notes';
import usersReducer from './users/users';

const rootReducer = combineReducers({
  notes: notesReducer,
  users: usersReducer,
});

const store = configureStore(
  {
    reducer: rootReducer,
  },
  applyMiddleware(thunk)
);

export default store;
