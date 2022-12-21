import {
  applyMiddleware,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import notesReducer from './notes/notes';

const rootReducer = combineReducers({
  notes: notesReducer,
});

const store = configureStore(
  {
    reducer: rootReducer,
  },
  applyMiddleware(thunk)
);

export default store;
