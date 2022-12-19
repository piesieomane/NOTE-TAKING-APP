import express from 'express';
import noteRouter from './routes/note';
import db from './models';

const app = express();
const PORT = process.env.PORT || 3000;

//add midlleWares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/notes', noteRouter);

app.listen(3000);
