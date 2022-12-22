import db from '../database/models';
import jwt from 'jsonwebtoken';

//create a User // sql UPSERT
export const createUser = async (req: any, res: any) => {
  const { name } = req.body;
  // find user by name, if the user exists, use that user's id to create a jwt token
  const User = await db.User.findOne({ where: { name: name } });
  if (User) {
    // create a jwt token
    const token = jwt.sign({ userId: User.id }, 'secretKey');
    res.json({ User, token });
  } else {
    const user = await db.User.create({
      name,
    });
    const token = jwt.sign({ userId: user.id }, 'shhh');
    res.json({ user, token });
  }
  // else create a new user using the name from the request body and then use the created user's id to
  // create a jwt token eg: jwt.sign({userId: <actual_value>}, secretKey)

  // CLIENT SIDE: look into adding jwt token in authorization header on the client side
};

//get all Users
export const getUsers = async (req: any, res: any) => {
  const users = await db.User.findAll();
  res.json(users);
};

//get a User by id
export const getUser = async (req: any, res: any) => {
  const { id } = req.params;
  const user = await db.User.findByPk(id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

//update a User by id
export const updateUser = async (req: any, res: any) => {
  const { id } = req.params;
  const { name } = req.body;
  const user = await db.User.findOne({ where: { id: id } });
  if (user) {
    user.name = name;
    await user.save();
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

//delete a User by id
export const deleteUser = async (req: any, res: any) => {
  const { id } = req.params;
  const user = await db.User.findByPk(id);
  if (user) {
    await user.destroy();
    res.json({ message: 'User deleted' });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

//add a Note to a User
export const addNote = async (req: any, res: any) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const user = await db.User.findByPk(id);
  if (user) {
    const note = await db.Note.create({
      title,
      content,
    });
    await user.addNote(note);
    res.json(note);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

//get all Notes from a User
export const getNotes = async (req: any, res: any) => {
  const { id } = req.params;
  const user = await db.User.findByPk(id);
  if (user) {
    const notes = await user.getNotes();
    res.json(notes);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

//get a Note from a User
export const getNote = async (req: any, res: any) => {
  const { id, noteId } = req.params;
  const user = await db.User.findByPk(id);
  if (user) {
    const note = await db.Note.findByPk(noteId);
    if (note) {
      res.json(note);
    } else {
      res.status(404).json({ message: 'Note not found' });
    }
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};
