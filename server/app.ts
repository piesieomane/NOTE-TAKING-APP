import express from 'express';
import noteRouter from './routes/note';
import db from './database';

const connectDb = () => {
  db.authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    });
};

connectDb();

const app = express();

app.listen(3000);
