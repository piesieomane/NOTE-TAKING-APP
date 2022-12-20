import express from 'express';
import noteRouter from './routes/note';
import userRouter from './routes/user';
import db from './database/models';

const app = express();
const PORT = process.env.PORT || 3000;

const connectDB = async () => {
  try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    throw new Error('Unable to connect to the database:');
  }
};

//add midlleWares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//add routes
app.use('/api/notes', noteRouter);
app.use('/api/users', userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
