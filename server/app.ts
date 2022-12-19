import express from 'express';
import noteRouter from './routes/note';
import db from './models';

const app = express();
const PORT = process.env.PORT || 3000;

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
});

//add midlleWares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
